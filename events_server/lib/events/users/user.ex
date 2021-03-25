defmodule Events.Users.User do
  use Ecto.Schema
  import Ecto.Changeset

  schema "users" do
    field :email, :string
    field :name, :string
    field :password_hash, :string

    has_many :posts, Events.Posts.Post
    has_many :comments, Events.Comments.Comment
    has_many :responses, Events.Responses.Response

    timestamps()
  end

  @doc false
  def changeset(user, attrs) do
    user
    |> cast(attrs, [:name, :email])
    |> add_hashed_pwd(attrs["password"])
    |> validate_required([:name, :email, :password_hash])
  end

  # if no password given, just return the unchanged Changeset
  def add_hashed_pwd(changeset, nil) do
    changeset
  end

  # hash the given password and update the password field of the Changeset
  def add_hashed_pwd(changeset, pwd) do
    change(changeset, Argon2.add_hash(pwd))
  end

end
