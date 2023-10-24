A `Location` object is used to give a specific location a concrete identity that can be used to link `Resources` to `Users` and easily referred to in `Reports`.

It can be set by any of three things:

-   A set of coordinates
-   An address
-   A meter point id

`Locations` are always owned by users and as such their main endpoint is under `/users/:uid/locations`

`/locations` is only used to GET all locations regardless of user, and cannot be used for CRUD operations on individual locations.
