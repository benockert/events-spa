defmodule EventsWeb.SessionController do
  use EventsWeb, :controller

  alias Events.Users

  def create(conn, %{"email" => email, "password" => pass}) do
    # authenticates the user
    user = Users.authenticate(email, pass)

    if user do
      # password is valid; form a session Object with a csrf token
      session = %{
        user_id: user.id, name: user.name,
        token: Phoenix.Token.sign(conn, "user_id", user.id)
      }
      # send the session object to the user
      conn
      |> put_resp_header("content-type", "application/json; charset=UTF-8")
      |> send_resp(:created, Jason.encode!(%{session: session}))
    else
      conn
      |> put_resp_header("content-type", "application/json; charset=UTF-8")
      |> send_resp(:unauthorized, Jason.encode!(
        %{error: "Login failed: Incorrect email address or password"}))
    end
  end
end
