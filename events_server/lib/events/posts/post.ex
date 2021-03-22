defmodule Events.Posts.Post do
  use Ecto.Schema
  import Ecto.Changeset

  schema "posts" do
    field :date, :string
    field :description, :string
    field :invitees, :string
    field :title, :string

    belongs_to :user, Events.Users.User
    has_many :comments, Events.Comments.Comment
    has_many :responses, Events.Responses.Response

    timestamps()
  end

  @doc false
  def changeset(post, attrs) do
    post
    |> cast(attrs, [:title, :date, :description, :invitees, :user_id])
    |> validate_required([:title, :date, :description, :invitees, :user_id])
  end
end
