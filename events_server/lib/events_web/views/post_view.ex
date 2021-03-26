defmodule EventsWeb.PostView do
  use EventsWeb, :view
  alias EventsWeb.PostView
  alias EventsWeb.UserView

  def render("index.json", %{posts: posts}) do
    %{data: render_many(posts, PostView, "post.json")}
  end

  def render("show.json", %{post: post}) do
    %{data: render_one(post, PostView, "post.json")}
  end

  def render("post.json", %{post: post}) do
    %{id: post.id,
      title: post.title,
      date: post.date,
      description: post.description,
      invitees: post.invitees,
      user: render_one(post.user, UserView, "user.json")}
  end
end
