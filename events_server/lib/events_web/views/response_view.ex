defmodule EventsWeb.ResponseView do
  use EventsWeb, :view
  alias EventsWeb.ResponseView
  alias EventsWeb.UserView

  alias Events.Repo

  def render("index.json", %{responses: responses}) do
    %{data: render_many(responses, ResponseView, "response.json")}
  end

  def render("show.json", %{response: response}) do
    %{data: render_one(response, ResponseView, "response.json")}
  end

  def render("response.json", %{response: response}) do
    response = response |>
    Repo.preload(:user)

    %{id: response.id,
      user: render_one(response.user, UserView, "user.json"),
      post_id: response.post_id,
      response: response.response}
  end
end
