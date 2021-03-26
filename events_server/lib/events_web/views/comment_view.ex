defmodule EventsWeb.CommentView do
  use EventsWeb, :view
  alias EventsWeb.CommentView
  alias EventsWeb.UserView
  alias EventsWeb.PostView

  alias Events.Repo

  def render("index.json", %{comments: comments}) do
    %{data: render_many(comments, CommentView, "comment.json")}
  end

  def render("show.json", %{comment: comment}) do
    %{data: render_one(comment, CommentView, "comment.json")}
  end

  def render("comment.json", %{comment: comment}) do
    # preload the user who made the comment
    comment = comment |>
    Repo.preload(:user)
    
    %{id: comment.id,
      body: comment.body,
      post_id: comment.post_id,
      user: render_one(comment.user, UserView, "user.json")
    }
  end
end
