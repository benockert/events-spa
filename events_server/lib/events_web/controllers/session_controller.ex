defmodule EventsWeb.SessionController do
  use EventsWeb, :controller

  alias Events.Users

  def create(conn, %{"email" => email, "password" => pass}) do
    # finds the attempted login user by email
    user = Users.get_user_by_email!(email)

    # form a session Object with a csrf token
    session = %{
      user_id: user.id, name: user.name,
      token: Phoenix.Token.sign(conn, "user_id", user.id)
    }

    # send the session object to the user
    conn
    |> put_resp_header("content-type", "application/json; charset=UTF-8")
    |> send_resp(:created, Jason.encode!(session))
  end
end
