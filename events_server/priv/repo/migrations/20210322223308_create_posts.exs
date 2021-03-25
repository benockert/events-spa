defmodule Events.Repo.Migrations.CreatePosts do
  use Ecto.Migration

  def change do
    create table(:posts) do
      add :title, :string, null: false
      add :date, :string, null: false
      add :description, :text, null: false
      add :invitees, :text, null: false
      add :user_id, references(:users, on_delete: :nothing), null: false

      timestamps()
    end

    create index(:posts, [:user_id])
  end
end
