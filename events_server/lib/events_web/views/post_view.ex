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
    IO.inspect("GOt here")
    IO.inspect(post)
    %{id: post.id,
      title: post.title,
      date: post.date,
      description: post.description,
      user: render_one(post.user, UserView, "user.json")}
  end
end
