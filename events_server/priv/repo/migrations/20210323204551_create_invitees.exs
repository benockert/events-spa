defmodule Events.Repo.Migrations.CreateInvitees do
  use Ecto.Migration

  def change do
    create table(:invitees) do
      add :email, :string, null: false
      add :response, :string, null: false
      add :post_id, references(:posts, on_delete: :nothing)
      add :user_id, references(:users, on_delete: :nothing), null: true

      timestamps()
    end

    create index(:invitees, [:post_id])
    create index(:invitees, [:user_id])
  end
end
