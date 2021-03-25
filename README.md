*Snippets of code from both the server and ui directories are based on
or copied from Nat Tuck's photo-blog-spa in-class example*

## HW9 Design
- When a user logs out, the session is removed from local storage so
that  page refreshes do not log the user back in
- Users are unable to create emails that do not match the #@#.#
format, where '#' can be an any-lengthed string of letters and numbers
- Users are also unable to add invitees to their event unless they
specify a comma-separated list of valid emails with the same
constraints as above
