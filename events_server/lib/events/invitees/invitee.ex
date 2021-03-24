defmodule Events.Invitees.Invitee do
  use Ecto.Schema
  import Ecto.Changeset

  schema "invitees" do
    field :email, :string
    field :response, :string

    belongs_to :post, Events.Posts.Post
    belongs_to :user, Events.Users.User

    timestamps()
  end

  @doc false
  def changeset(invitee, attrs) do
    invitee
    |> cast(attrs, [:email, :response, :post_id, :user_id])
    |> validate_required([:email, :response, :post_id])
  end
end
