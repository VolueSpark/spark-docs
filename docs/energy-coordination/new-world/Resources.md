A `Resource` in our service represents a distributed energy resource belonging to a specific user. Resources can be categorised as either *static* or *dynamic*, depending on their mobility characteristics.

- **Static Resources**: These resources cannot move, like hot water tanks, and are associated with specific user `Locations`
- **Dynamic Resources**: These resources, like electric vehicles, can move freely and are still linked to individual `Users`.

## Static Resources

### Creating Static Resources

Static resources cannot move and should be registered to a set `Location` that is owned by a `User`. To register a static resource, send a **POST** request to `/users/:uid/locations/:lid/static-resources`

#### Parameters:

- **metadata** (required): Provide a JSON object of `ResourceMetadata` for the relevant resource type. Currently, we support `HotWaterTankMetadata` for this field.

### Getting Static Resources

To retrieve information about a specific static resource, send a **GET** request to `/users/:uid/locations/:lid/static-resources/:resourceId`. This will return details about the resource.

### Updating Static Resources

To update a static resource, send a **PUT** request to `/users/:uid/locations/:lid/static-resources/:resourceId`, where `:resourceId` is the unique identifier of the resource you want to update.

### Deleting Static Resources

To delete a static resource, use a **DELETE** request to `/users/:uid/locations/:lid/static-resources/:resourceId`. This will remove the resource from the specified location.

## Dynamic Resources

### Creating Dynamic Resources

Dynamic resources, such as electric vehicles, have the ability to move freely and do not have a fixed `Location`. They are still owned by a specific `User`. Create one by sending a **POST** request to `/users/:uid/dynamic-resources`

#### Parameters:

- **metadata** (required): Include a JSON object of `ResourceMetadata` for the specific resource type. Currently, we support `VehicleMetadata` for this field.

### Getting Dynamic Resources

To retrieve information about a specific dynamic resource, send a **GET** request to `/users/:uid/dynamic-resources/:resourceId`. This will return details about the resource.

### Updating Dynamic Resources

To update a dynamic resource, send a **PUT** request to `/users/:uid/dynamic-resources/:resourceId`, where `:resourceId` is the unique identifier of the resource you want to update.

### Deleting Dynamic Resources

To delete a dynamic resource, use a **DELETE** request to `/users/:uid/dynamic-resources/:resourceId`. This will remove the resource from the user's account.

## Fetching Resources

There are several endpoints that can be used to fetch resources depending on what set you want.

### All Resources

To retrieve all resources for all users, use the `GET /resources` endpoint. You can apply filtering using the following query parameters:

- **resourceType**: Filter resources by type, e.g., `"Vehicle"`. Use `string(SparkResourceType)` as the data type.
- **movementType**: Filter resources by movement type, either "Static" or "Dynamic". Use `string(SparkMovementType)` as the data type.

`/resources` is only used to GET all `Resources` regardless of their owner, and cannot be used for CRUD operations on individual resources.

### Resources Owned by a User

- **All Resources**: Use `GET /users/:uid/resources` to get all resources owned by a specific user.
- **All Dynamic Resources**: Access all dynamic resources with `GET /users/:uid/dynamic-resources`.
- **All Static Resources**: Retrieve all static resources with `GET /users/:uid/static-resources`.
- **All Static Resources at a Location**: Fetch all static resources at a specific `Location` using `GET /users/:uid/locations/:lid/static-resources`.

## Pagination

Something something - large number of results - ??? - profit
