# Script for populating the database. You can run it as:
#
#     mix run priv/repo/seeds.exs
#
# Inside the script, you can read and write to any of your
# repositories directly:
#
#     Eventapp.Repo.insert!(%Eventapp.SomeSchema{})
#
# We recommend using the bang functions (`insert!`, `update!`
# and so on) as they will fail if something goes wrong.
alias Events.Repo
alias Events.Users.User
alias Events.Posts.Post
alias Events.Responses.Response
alias Events.Comments.Comment

pass_hash = Argon2.hash_pwd_salt("abc123")

joseph = Repo.insert!(%User{name: "Joseph Aoun", email: "aoun.j@northeastern.edu", password_hash: pass_hash})
andrade = Repo.insert!(%User{name: "Andrade Ferron", email: "ferron.a@northeastern.edu", password_hash: pass_hash})
nat = Repo.insert!(%User{name: "Nat Tuck", email: "tuck.n@northeastern.edu", password_hash: pass_hash})
benjamin = Repo.insert!(%User{name: "Benjamin Ockert", email: "ockert.b@northeastern.edu", password_hash: pass_hash})
steven = Repo.insert!(%User{name: "Steven Yoo", email: "yoo.s@northeastern.edu", password_hash: pass_hash})

commencement = Repo.insert!(%Post{user_id: joseph.id, title: "Commencement",
                                      date: "05/07/2021",
                                      description: "Graduation for the Class of 2021!",
                                      invitees: "ockert.b@northeastern.edu, ferror.a@northeastern.edu, yoo.s@northeastern.edu"})

dayoff = Repo.insert!(%Post{user_id: andrade.id, title: "Mental Health Day",
                                      date: "03/24/2021",
                                      description: "A day off for students during the Spring 2021 semester",
                                      invitees: "ockert.b@northeastern.edu"})

Repo.insert!(%Response{response: "Yes", user_id: benjamin.id, post_id: commencement.id})
Repo.insert!(%Response{response: "No", user_id: andrade.id, post_id: commencement.id})
Repo.insert!(%Response{response: "No Response", user_id: steven.id, post_id: commencement.id})
Repo.insert!(%Response{response: "Yes", user_id: benjamin.id, post_id: dayoff.id})

Repo.insert!(%Comment{body: "Yay this is amazing!", user_id: benjamin.id, post_id: dayoff.id})
Repo.insert!(%Comment{body: "I am looking forward to virtual commencement.", user_id: benjamin.id, post_id: commencement.id})
