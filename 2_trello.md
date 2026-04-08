# Trello REST API — Postman Collection Reference

> **Base URL:** `https://api.trello.com/1/`

> **Authentication:** Bearer Token (passed via `Authorization` header)

> **Collection Schema:** Postman v2.0.0

---

## Table of Contents

- [Actions](#actions) (16 endpoints)
- [Applications](#applications) (1 endpoints)
- [Batch](#batch) (1 endpoints)
- [Boards](#boards) (36 endpoints)
- [Cards](#cards) (42 endpoints)
- [Checklists](#checklists) (12 endpoints)
- [CustomFields](#customfields) (8 endpoints)
- [Emoji](#emoji) (1 endpoints)
- [Enterprises](#enterprises) (21 endpoints)
- [Labels](#labels) (5 endpoints)
- [Lists](#lists) (11 endpoints)
- [Members](#members) (45 endpoints)
- [Notifications](#notifications) (11 endpoints)
- [Organizations](#organizations) (26 endpoints)
- [Plugins](#plugins) (5 endpoints)
- [Search](#search) (2 endpoints)
- [Tokens](#tokens) (8 endpoints)
- [Webhooks](#webhooks) (5 endpoints)

**Total endpoints: 256**

---

## Actions

### Get an Action

`GET` `/actions/:id`

**Optional Query Parameters:**

| Parameter              | Description                                                                                                         |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `display`              |                                                                                                                     |
| `entities`             |                                                                                                                     |
| `fields`               | `all` or a comma-separated list of action [fields](/cloud/trello/guides/rest-api/object-definitions/#action-object) |
| `member`               |                                                                                                                     |
| `member_fields`        | `all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/)               |
| `memberCreator`        | Whether to include the member object for the creator of the action                                                  |
| `memberCreator_fields` | `all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/)               |

---

### Update an Action

`PUT` `/actions/:id`

Update a specific Action. Only comment actions can be updated. Used to edit the content of a comment.

**Required Query Parameters:**

| Parameter | Description                  |
| --------- | ---------------------------- |
| `text`    | The new text for the comment |

---

### Delete an Action

`DELETE` `/actions/:id`

Delete a specific action. Only comment actions can be deleted.

---

### Get a specific field on an Action

`GET` `/actions/:id/:field`

Get a specific property of an action

**Path Parameters:**

| Parameter | Description          |
| --------- | -------------------- |
| `id`      | The ID of the Action |
| `field`   | An action field      |

---

### Get the Board for an Action

`GET` `/actions/:id/board`

**Path Parameters:**

| Parameter | Description          |
| --------- | -------------------- |
| `id`      | The ID of the action |

**Optional Query Parameters:**

| Parameter | Description                                     |
| --------- | ----------------------------------------------- |
| `fields`  | `all` or a comma-separated list of board fields |

---

### Get the Card for an Action

`GET` `/actions/:id/card`

Get the card for an action

**Path Parameters:**

| Parameter | Description          |
| --------- | -------------------- |
| `id`      | The ID of the action |

**Optional Query Parameters:**

| Parameter | Description                                    |
| --------- | ---------------------------------------------- |
| `fields`  | `all` or a comma-separated list of card fields |

---

### Get the List for an Action

`GET` `/actions/:id/list`

**Path Parameters:**

| Parameter | Description          |
| --------- | -------------------- |
| `id`      | The ID of the action |

**Optional Query Parameters:**

| Parameter | Description                                    |
| --------- | ---------------------------------------------- |
| `fields`  | `all` or a comma-separated list of list fields |

---

### Get the Member of an Action

`GET` `/actions/:id/member`

Gets the member of an action (not the creator)

**Path Parameters:**

| Parameter | Description          |
| --------- | -------------------- |
| `id`      | The ID of the Action |

**Optional Query Parameters:**

| Parameter | Description                                      |
| --------- | ------------------------------------------------ |
| `fields`  | `all` or a comma-separated list of member fields |

---

### Get the Member Creator of an Action

`GET` `/actions/:id/memberCreator`

Get the Member who created the Action

**Path Parameters:**

| Parameter | Description          |
| --------- | -------------------- |
| `id`      | The ID of the Action |

**Optional Query Parameters:**

| Parameter | Description                                      |
| --------- | ------------------------------------------------ |
| `fields`  | `all` or a comma-separated list of member fields |

---

### Get the Organization of an Action

`GET` `/actions/:id/organization`

**Path Parameters:**

| Parameter | Description          |
| --------- | -------------------- |
| `id`      | The ID of the action |

**Optional Query Parameters:**

| Parameter | Description                                            |
| --------- | ------------------------------------------------------ |
| `fields`  | `all` or a comma-separated list of organization fields |

---

### Update a Comment Action

`PUT` `/actions/:id/text`

Update a comment action

**Path Parameters:**

| Parameter | Description                    |
| --------- | ------------------------------ |
| `id`      | The ID of the action to update |

**Required Query Parameters:**

| Parameter | Description                  |
| --------- | ---------------------------- |
| `value`   | The new text for the comment |

---

### Get Action's Reactions

`GET` `/actions/:idAction/reactions`

List reactions for an action

**Optional Query Parameters:**

| Parameter | Description                                                                                                                                             |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `member`  | Whether to load the member as a nested resource. See [Members Nested Resource](/cloud/trello/guides/rest-api/nested-resources/#members-nested-resource) |
| `emoji`   | Whether to load the emoji as a nested resource.                                                                                                         |

---

### Create Reaction for Action

`POST` `/actions/:idAction/reactions`

Adds a new reaction to an action

---

### Get Action's Reaction

`GET` `/actions/:idAction/reactions/:id`

Get information for a reaction

**Optional Query Parameters:**

| Parameter | Description                                                                                                                                             |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `member`  | Whether to load the member as a nested resource. See [Members Nested Resource](/cloud/trello/guides/rest-api/nested-resources/#members-nested-resource) |
| `emoji`   | Whether to load the emoji as a nested resource.                                                                                                         |

---

### Delete Action's Reaction

`DELETE` `/actions/:idAction/reactions/:id`

Deletes a reaction

---

### List Action's summary of Reactions

`GET` `/actions/:idAction/reactionsSummary`

List a summary of all reactions for an action

**Path Parameters:**

| Parameter  | Description          |
| ---------- | -------------------- |
| `idAction` | The ID of the action |

---

## Applications

### Get Application's compliance data

`GET` `/applications/:key/compliance`

---

## Batch

### Batch Requests

`GET` `/batch`

Make up to 10 GET requests in a single, batched API call.

**Required Query Parameters:**

| Parameter | Description                                                                                                                                                                                  |
| --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `urls`    | A list of API routes. Maximum of 10 routes allowed. The routes should begin with a forward slash and should not include the API version number - e.g. "urls=/members/trello,/cards/[cardId]" |

---

## Boards

### Get Memberships of a Board

`GET` `/boards/:id/memberships`

Get information about the memberships users have to the board.

**Path Parameters:**

| Parameter | Description         |
| --------- | ------------------- |
| `id`      | The ID of the board |

**Optional Query Parameters:**

| Parameter       | Description                                                                                                                      |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `filter`        | One of `admins`, `all`, `none`, `normal`                                                                                         |
| `activity`      | Works for premium organizations only.                                                                                            |
| `orgMemberType` | Shows the type of member to the org the user is. For instance, an org admin will have a `orgMemberType` of `admin`.              |
| `member`        | Determines whether to include a [nested member object](/cloud/trello/guides/rest-api/nested-resources/).                         |
| `member_fields` | Fields to show if `member=true`. Valid values: [nested member resource fields](/cloud/trello/guides/rest-api/nested-resources/). |

---

### Get a Board

`GET` `/boards/:id`

Request a single board.

**Optional Query Parameters:**

| Parameter                 | Description                                                                                                                                                                                                                                                                                                                  |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `actions`                 | This is a nested resource. Read more about actions as nested resources [here](/cloud/trello/guides/rest-api/nested-resources/).                                                                                                                                                                                              |
| `boardStars`              | Valid values are one of: `mine` or `none`.                                                                                                                                                                                                                                                                                   |
| `cards`                   | This is a nested resource. Read more about cards as nested resources [here](/cloud/trello/guides/rest-api/nested-resources/).                                                                                                                                                                                                |
| `card_pluginData`         | Use with the `cards` param to include card pluginData with the response                                                                                                                                                                                                                                                      |
| `checklists`              | This is a nested resource. Read more about checklists as nested resources [here](/cloud/trello/guides/rest-api/nested-resources/).                                                                                                                                                                                           |
| `customFields`            | This is a nested resource. Read more about custom fields as nested resources [here](#custom-fields-nested-resource).                                                                                                                                                                                                         |
| `fields`                  | The fields of the board to be included in the response. Valid values: all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idMemberCreator, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed, url |
| `labels`                  | This is a nested resource. Read more about labels as nested resources [here](/cloud/trello/guides/rest-api/nested-resources/).                                                                                                                                                                                               |
| `lists`                   | This is a nested resource. Read more about lists as nested resources [here](/cloud/trello/guides/rest-api/nested-resources/).                                                                                                                                                                                                |
| `members`                 | This is a nested resource. Read more about members as nested resources [here](/cloud/trello/guides/rest-api/nested-resources/).                                                                                                                                                                                              |
| `memberships`             | This is a nested resource. Read more about memberships as nested resources [here](/cloud/trello/guides/rest-api/nested-resources/).                                                                                                                                                                                          |
| `pluginData`              | Determines whether the pluginData for this board should be returned. Valid values: true or false.                                                                                                                                                                                                                            |
| `organization`            | This is a nested resource. Read more about organizations as nested resources [here](/cloud/trello/guides/rest-api/nested-resources/).                                                                                                                                                                                        |
| `organization_pluginData` | Use with the `organization` param to include organization pluginData with the response                                                                                                                                                                                                                                       |
| `myPrefs`                 |                                                                                                                                                                                                                                                                                                                              |
| `tags`                    | Also known as collections, tags, refer to the collection(s) that a Board belongs to.                                                                                                                                                                                                                                         |

---

### Update a Board

`PUT` `/boards/:id`

Update an existing board by id

**Optional Query Parameters:**

| Parameter                   | Description                                                                                      |
| --------------------------- | ------------------------------------------------------------------------------------------------ |
| `name`                      | The new name for the board. 1 to 16384 characters long.                                          |
| `desc`                      | A new description for the board, 0 to 16384 characters long                                      |
| `closed`                    | Whether the board is closed                                                                      |
| `subscribed`                | Whether the acting user is subscribed to the board                                               |
| `idOrganization`            | The id of the Workspace the board should be moved to                                             |
| `prefs/permissionLevel`     | One of: org, private, public                                                                     |
| `prefs/selfJoin`            | Whether Workspace members can join the board themselves                                          |
| `prefs/cardCovers`          | Whether card covers should be displayed on this board                                            |
| `prefs/hideVotes`           | Determines whether the Voting Power-Up should hide who voted on cards or not.                    |
| `prefs/invitations`         | Who can invite people to this board. One of: admins, members                                     |
| `prefs/voting`              | Who can vote on this board. One of disabled, members, observers, org, public                     |
| `prefs/comments`            | Who can comment on cards on this board. One of: disabled, members, observers, org, public        |
| `prefs/background`          | The id of a custom background or one of: blue, orange, green, red, purple, pink, lime, sky, grey |
| `prefs/cardAging`           | One of: pirate, regular                                                                          |
| `prefs/calendarFeedEnabled` | Determines whether the calendar feed is enabled or not.                                          |

---

### Delete a Board

`DELETE` `/boards/:id`

Delete a board.

**Path Parameters:**

| Parameter | Description                   |
| --------- | ----------------------------- |
| `id`      | The id of the board to delete |

---

### Get a field on a Board

`GET` `/boards/:id/:field`

Get a single, specific field on a board

**Path Parameters:**

| Parameter | Description                                                                                                                                                                                                                                                          |
| --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`      | The ID of the board.                                                                                                                                                                                                                                                 |
| `field`   | The field you'd like to receive. Valid values: closed, dateLastActivity, dateLastView, desc, descData, idMemberCreator, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed, url. |

---

### Get Actions of a Board

`GET` `/boards/:boardId/actions`

Get all of the actions of a Board. See [Nested Resources](/cloud/trello/guides/rest-api/nested-resources/) for more information.

**Path Parameters:**

| Parameter | Description |
| --------- | ----------- |
| `boardId` |             |

**Optional Query Parameters:**

| Parameter              | Description                                                                                                                           |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `fields`               | The fields to be returned for the Actions. [See Action fields here](/cloud/trello/guides/rest-api/object-definitions/#action-object). |
| `filter`               | A comma-separated list of [action types](/cloud/trello/guides/rest-api/action-types/).                                                |
| `format`               | The format of the returned Actions. Either list or count.                                                                             |
| `idModels`             | A comma-separated list of idModels. Only actions related to these models will be returned.                                            |
| `limit`                | The limit of the number of responses, between 0 and 1000.                                                                             |
| `member`               | Whether to return the member object for each action.                                                                                  |
| `member_fields`        | The fields of the [member](/cloud/trello/guides/rest-api/object-definitions/#member-object) to return.                                |
| `memberCreator`        | Whether to return the memberCreator object for each action.                                                                           |
| `memberCreator_fields` | The fields of the [member](/cloud/trello/guides/rest-api/object-definitions/#member-object) creator to return                         |
| `page`                 | The page of results for actions.                                                                                                      |
| `reactions`            | Whether to show reactions on comments or not.                                                                                         |
| `before`               | A date string in the form of YYYY-MM-DDThh:mm:ssZ or a mongo object ID. Only objects created before this date will be returned.       |
| `since`                | A date string in the form of YYYY-MM-DDThh:mm:ssZ or a mongo object ID. Only objects created since this date will be returned.        |

---

### Get boardStars on a Board

`GET` `/boards/:boardId/boardStars`

**Path Parameters:**

| Parameter | Description |
| --------- | ----------- |
| `boardId` |             |

**Optional Query Parameters:**

| Parameter | Description              |
| --------- | ------------------------ |
| `filter`  | Valid values: mine, none |

---

### Get Checklists on a Board

`GET` `/boards/:id/checklists`

Get all of the checklists on a Board.

**Path Parameters:**

| Parameter | Description         |
| --------- | ------------------- |
| `id`      | The ID of the board |

---

### Get Cards on a Board

`GET` `/boards/:id/cards`

Get all of the open Cards on a Board. See [Nested Resources](/cloud/trello/guides/rest-api/nested-resources/) for more information.

**Path Parameters:**

| Parameter | Description |
| --------- | ----------- |
| `id`      |             |

---

### Get filtered Cards on a Board

`GET` `/boards/:id/cards/:filter`

Get the Cards on a Board that match a given filter. See [Nested Resources](/cloud/trello/guides/rest-api/nested-resources/) for more information.

**Path Parameters:**

| Parameter | Description                                                                  |
| --------- | ---------------------------------------------------------------------------- |
| `id`      | ID of the Board                                                              |
| `filter`  | One of: `all`, `closed`, `complete`, `incomplete`, `none`, `open`, `visible` |

---

### Get Custom Fields for Board

`GET` `/boards/:id/customFields`

Get the Custom Field Definitions that exist on a board.

**Path Parameters:**

| Parameter | Description         |
| --------- | ------------------- |
| `id`      | The ID of the board |

---

### Get Labels on a Board

`GET` `/boards/:id/labels`

Get all of the Labels on a Board.

**Path Parameters:**

| Parameter | Description          |
| --------- | -------------------- |
| `id`      | The ID of the Board. |

**Optional Query Parameters:**

| Parameter | Description                               |
| --------- | ----------------------------------------- |
| `fields`  | The fields to be returned for the Labels. |
| `limit`   | The number of Labels to be returned.      |

---

### Create a Label on a Board

`POST` `/boards/:id/labels`

Create a new Label on a Board.

**Path Parameters:**

| Parameter | Description                   |
| --------- | ----------------------------- |
| `id`      | The id of the board to update |

**Required Query Parameters:**

| Parameter | Description                                                                |
| --------- | -------------------------------------------------------------------------- |
| `name`    | The name of the label to be created. 1 to 16384 characters long.           |
| `color`   | Sets the color of the new label. Valid values are a label color or `null`. |

---

### Get Lists on a Board

`GET` `/boards/:id/lists`

Get the Lists on a Board

**Optional Query Parameters:**

| Parameter     | Description                                                                                                     |
| ------------- | --------------------------------------------------------------------------------------------------------------- |
| `cards`       | Filter to apply to Cards.                                                                                       |
| `card_fields` | `all` or a comma-separated list of card [fields](/cloud/trello/guides/rest-api/object-definitions/#card-object) |
| `filter`      | Filter to apply to Lists                                                                                        |
| `fields`      | `all` or a comma-separated list of list [fields](/cloud/trello/guides/rest-api/object-definitions/)             |

---

### Create a List on a Board

`POST` `/boards/:id/lists`

Create a new List on a Board.

**Required Query Parameters:**

| Parameter | Description                                                     |
| --------- | --------------------------------------------------------------- |
| `name`    | The name of the list to be created. 1 to 16384 characters long. |

**Optional Query Parameters:**

| Parameter | Description                                                                               |
| --------- | ----------------------------------------------------------------------------------------- |
| `pos`     | Determines the position of the list. Valid values: `top`, `bottom`, or a positive number. |

---

### Get filtered Lists on a Board

`GET` `/boards/:id/lists/:filter`

**Path Parameters:**

| Parameter | Description                            |
| --------- | -------------------------------------- |
| `id`      | The ID of the board                    |
| `filter`  | One of `all`, `closed`, `none`, `open` |

---

### Get the Members of a Board

`GET` `/boards/:id/members`

Get the Members for a board

---

### Invite Member to Board via email

`PUT` `/boards/:id/members`

Invite a Member to a Board via their email address.

**Required Query Parameters:**

| Parameter | Description                                                  |
| --------- | ------------------------------------------------------------ |
| `email`   | The email address of a user to add as a member of the board. |

**Optional Query Parameters:**

| Parameter | Description                                                                                                        |
| --------- | ------------------------------------------------------------------------------------------------------------------ |
| `type`    | Valid values: admin, normal, observer. Determines what type of member the user being added should be of the board. |

---

### Add a Member to a Board

`PUT` `/boards/:id/members/:idMember`

Add a member to the board.

**Required Query Parameters:**

| Parameter | Description                                                                                    |
| --------- | ---------------------------------------------------------------------------------------------- |
| `type`    | One of: admin, normal, observer. Determines the type of member this user will be on the board. |

**Optional Query Parameters:**

| Parameter            | Description                                                                            |
| -------------------- | -------------------------------------------------------------------------------------- |
| `allowBillableGuest` | Optional param that allows organization admins to add multi-board guests onto a board. |

---

### Remove Member from Board

`DELETE` `/boards/:id/members/:idMember`

---

### Update Membership of Member on a Board

`PUT` `/boards/:id/memberships/:idMembership`

Update an existing board by id

**Path Parameters:**

| Parameter      | Description                                                |
| -------------- | ---------------------------------------------------------- |
| `id`           | The id of the board to update                              |
| `idMembership` | The id of a membership that should be added to this board. |

**Required Query Parameters:**

| Parameter | Description                                                                                                |
| --------- | ---------------------------------------------------------------------------------------------------------- |
| `type`    | One of: admin, normal, observer. Determines the type of member that this membership will be to this board. |

**Optional Query Parameters:**

| Parameter       | Description                                                                                                                              |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `member_fields` | Valid values: all, avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url, username |

---

### Update emailPosition Pref on a Board

`PUT` `/boards/:id/myPrefs/emailPosition`

**Path Parameters:**

| Parameter | Description                   |
| --------- | ----------------------------- |
| `id`      | The id of the board to update |

**Required Query Parameters:**

| Parameter | Description                                                              |
| --------- | ------------------------------------------------------------------------ |
| `value`   | Valid values: bottom, top. Determines the position of the email address. |

---

### Update idEmailList Pref on a Board

`PUT` `/boards/:id/myPrefs/idEmailList`

Change the default list that email-to-board cards are created in.

**Path Parameters:**

| Parameter | Description                   |
| --------- | ----------------------------- |
| `id`      | The id of the board to update |

**Required Query Parameters:**

| Parameter | Description              |
| --------- | ------------------------ |
| `value`   | The id of an email list. |

---

### Update showSidebar Pref on a Board

`PUT` `/boards/:id/myPrefs/showSidebar`

**Path Parameters:**

| Parameter | Description                   |
| --------- | ----------------------------- |
| `id`      | The id of the board to update |

**Required Query Parameters:**

| Parameter | Description                              |
| --------- | ---------------------------------------- |
| `value`   | Determines whether to show the side bar. |

---

### Update showSidebarActivity Pref on a Board

`PUT` `/boards/:id/myPrefs/showSidebarActivity`

**Path Parameters:**

| Parameter | Description                   |
| --------- | ----------------------------- |
| `id`      | The id of the board to update |

**Required Query Parameters:**

| Parameter | Description                                  |
| --------- | -------------------------------------------- |
| `value`   | Determines whether to show sidebar activity. |

---

### Update showSidebarBoardActions Pref on a Board

`PUT` `/boards/:id/myPrefs/showSidebarBoardActions`

**Path Parameters:**

| Parameter | Description                   |
| --------- | ----------------------------- |
| `id`      | The id of the board to update |

**Required Query Parameters:**

| Parameter | Description                                           |
| --------- | ----------------------------------------------------- |
| `value`   | Determines whether to show the sidebar board actions. |

---

### Update showSidebarMembers Pref on a Board

`PUT` `/boards/:id/myPrefs/showSidebarMembers`

**Path Parameters:**

| Parameter | Description                   |
| --------- | ----------------------------- |
| `id`      | The id of the board to update |

**Required Query Parameters:**

| Parameter | Description                                                     |
| --------- | --------------------------------------------------------------- |
| `value`   | Determines whether to show members of the board in the sidebar. |

---

### Create a Board

`POST` `/boards/`

Create a new board.

**Required Query Parameters:**

| Parameter | Description                                             |
| --------- | ------------------------------------------------------- |
| `name`    | The new name for the board. 1 to 16384 characters long. |

**Optional Query Parameters:**

| Parameter               | Description                                                                                                                       |
| ----------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `defaultLabels`         | Determines whether to use the default set of labels.                                                                              |
| `defaultLists`          | Determines whether to add the default set of lists to a board (To Do, Doing, Done). It is ignored if `idBoardSource` is provided. |
| `desc`                  | A new description for the board, 0 to 16384 characters long                                                                       |
| `idOrganization`        | The id or name of the Workspace the board should belong to.                                                                       |
| `idBoardSource`         | The id of a board to copy into the new board.                                                                                     |
| `keepFromSource`        | To keep cards from the original board pass in the value `cards`                                                                   |
| `powerUps`              | The Power-Ups that should be enabled on the new board. One of: `all`, `calendar`, `cardAging`, `recap`, `voting`.                 |
| `prefs_permissionLevel` | The permissions level of the board. One of: `org`, `private`, `public`.                                                           |
| `prefs_voting`          | Who can vote on this board. One of `disabled`, `members`, `observers`, `org`, `public`.                                           |
| `prefs_comments`        | Who can comment on cards on this board. One of: `disabled`, `members`, `observers`, `org`, `public`.                              |
| `prefs_invitations`     | Determines what types of members can invite users to join. One of: `admins`, `members`.                                           |
| `prefs_selfJoin`        | Determines whether users can join the boards themselves or whether they have to be invited.                                       |
| `prefs_cardCovers`      | Determines whether card covers are enabled.                                                                                       |
| `prefs_background`      | The id of a custom background or one of: `blue`, `orange`, `green`, `red`, `purple`, `pink`, `lime`, `sky`, `grey`.               |
| `prefs_cardAging`       | Determines the type of card aging that should take place on the board if card aging is enabled. One of: `pirate`, `regular`.      |

---

### Create a calendarKey for a Board

`POST` `/boards/:id/calendarKey/generate`

Create a new board.

**Path Parameters:**

| Parameter | Description                   |
| --------- | ----------------------------- |
| `id`      | The id of the board to update |

---

### Create a emailKey for a Board

`POST` `/boards/:id/emailKey/generate`

**Path Parameters:**

| Parameter | Description                   |
| --------- | ----------------------------- |
| `id`      | The id of the board to update |

---

### Create a Tag for a Board

`POST` `/boards/:id/idTags`

**Path Parameters:**

| Parameter | Description                   |
| --------- | ----------------------------- |
| `id`      | The id of the board to update |

**Required Query Parameters:**

| Parameter | Description                                                        |
| --------- | ------------------------------------------------------------------ |
| `value`   | The id of a tag from the organization to which this board belongs. |

---

### Mark Board as viewed

`POST` `/boards/:id/markedAsViewed`

**Path Parameters:**

| Parameter | Description                   |
| --------- | ----------------------------- |
| `id`      | The id of the board to update |

---

### Get Enabled Power-Ups on Board

`GET` `/boards/:id/boardPlugins`

Get the enabled Power-Ups on a board

---

### Enable a Power-Up on a Board

`POST` `/boards/:id/boardPlugins`

**Optional Query Parameters:**

| Parameter  | Description                      |
| ---------- | -------------------------------- |
| `idPlugin` | The ID of the Power-Up to enable |

---

### Disable a Power-Up on a Board

`DELETE` `/boards/:id/boardPlugins/:idPlugin`

Disable a Power-Up on a board

**Path Parameters:**

| Parameter  | Description                       |
| ---------- | --------------------------------- |
| `id`       | The ID of the board               |
| `idPlugin` | The ID of the Power-Up to disable |

---

### Get Power-Ups on a Board

`GET` `/boards/:id/plugins`

List the Power-Ups on a board

**Path Parameters:**

| Parameter | Description         |
| --------- | ------------------- |
| `id`      | The ID of the board |

**Optional Query Parameters:**

| Parameter | Description                      |
| --------- | -------------------------------- |
| `filter`  | One of: `enabled` or `available` |

---

## Cards

### Create a new Card

`POST` `/cards`

Create a new card. Query parameters may also be replaced with a JSON request body instead.

**Required Query Parameters:**

| Parameter | Description                                      |
| --------- | ------------------------------------------------ |
| `idList`  | The ID of the list the card should be created in |

**Optional Query Parameters:**

| Parameter        | Description                                                                                                                                                                                     |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `name`           | The name for the card                                                                                                                                                                           |
| `desc`           | The description for the card                                                                                                                                                                    |
| `pos`            | The position of the new card. `top`, `bottom`, or a positive float                                                                                                                              |
| `due`            | A due date for the card                                                                                                                                                                         |
| `start`          | The start date of a card, or `null`                                                                                                                                                             |
| `dueComplete`    | Whether the status of the card is complete                                                                                                                                                      |
| `idMembers`      | Comma-separated list of member IDs to add to the card                                                                                                                                           |
| `idLabels`       | Comma-separated list of label IDs to add to the card                                                                                                                                            |
| `urlSource`      | A URL starting with `http://` or `https://`. The URL will be attached to the card upon creation.                                                                                                |
| `fileSource`     |                                                                                                                                                                                                 |
| `mimeType`       | The mimeType of the attachment. Max length 256                                                                                                                                                  |
| `idCardSource`   | The ID of a card to copy into the new card                                                                                                                                                      |
| `keepFromSource` | If using `idCardSource` you can specify which properties to copy over. `all` or comma-separated list of: `attachments,checklists,customFields,comments,due,start,labels,members,start,stickers` |
| `address`        | For use with/by the Map View                                                                                                                                                                    |
| `locationName`   | For use with/by the Map View                                                                                                                                                                    |
| `coordinates`    | For use with/by the Map View. Should take the form latitude,longitude                                                                                                                           |
| `cardRole`       | For displaying cards in different ways based on the card name. Board cards must have a name that is a link to a Trello board. Mirror cards must have a name that is a link to a Trello card.    |

---

### Get a Card

`GET` `/cards/:id`

Get a card by its ID

**Optional Query Parameters:**

| Parameter            | Description                                                                                                                                                                                                                                                                                                                            |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `fields`             | `all` or a comma-separated list of [fields](/cloud/trello/guides/rest-api/object-definitions/). **Defaults**: `badges, checkItemStates, closed, dateLastActivity, desc, descData, due, start, idBoard, idChecklists, idLabels, idList, idMembers, idShort, idAttachmentCover, manualCoverAttachment, labels, name, pos, shortUrl, url` |
| `actions`            | See the [Actions Nested Resource](/cloud/trello/guides/rest-api/nested-resources/#actions-nested-resource)                                                                                                                                                                                                                             |
| `attachments`        | `true`, `false`, or `cover`                                                                                                                                                                                                                                                                                                            |
| `attachment_fields`  | `all` or a comma-separated list of attachment [fields](/cloud/trello/guides/rest-api/object-definitions/)                                                                                                                                                                                                                              |
| `members`            | Whether to return member objects for members on the card                                                                                                                                                                                                                                                                               |
| `member_fields`      | `all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/). **Defaults**: `avatarHash, fullName, initials, username`                                                                                                                                                                        |
| `membersVoted`       | Whether to return member objects for members who voted on the card                                                                                                                                                                                                                                                                     |
| `memberVoted_fields` | `all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/). **Defaults**: `avatarHash, fullName, initials, username`                                                                                                                                                                        |
| `checkItemStates`    |                                                                                                                                                                                                                                                                                                                                        |
| `checklists`         | Whether to return the checklists on the card. `all` or `none`                                                                                                                                                                                                                                                                          |
| `checklist_fields`   | `all` or a comma-separated list of `idBoard,idCard,name,pos`                                                                                                                                                                                                                                                                           |
| `board`              | Whether to return the board object the card is on                                                                                                                                                                                                                                                                                      |
| `board_fields`       | `all` or a comma-separated list of board [fields](/cloud/trello/guides/rest-api/object-definitions/#board-object). **Defaults**: `name, desc, descData, closed, idOrganization, pinned, url, prefs`                                                                                                                                    |
| `list`               | See the [Lists Nested Resource](/cloud/trello/guides/rest-api/nested-resources/)                                                                                                                                                                                                                                                       |
| `pluginData`         | Whether to include pluginData on the card with the response                                                                                                                                                                                                                                                                            |
| `stickers`           | Whether to include sticker models with the response                                                                                                                                                                                                                                                                                    |
| `sticker_fields`     | `all` or a comma-separated list of sticker [fields](/cloud/trello/guides/rest-api/object-definitions/)                                                                                                                                                                                                                                 |
| `customFieldItems`   | Whether to include the customFieldItems                                                                                                                                                                                                                                                                                                |

---

### Update a Card

`PUT` `/cards/:id`

Update a card. Query parameters may also be replaced with a JSON request body instead.

**Optional Query Parameters:**

| Parameter           | Description                                                                          |
| ------------------- | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------- |
| `name`              | The new name for the card                                                            |
| `desc`              | The new description for the card                                                     |
| `closed`            | Whether the card should be archived (closed: true)                                   |
| `idMembers`         | Comma-separated list of member IDs                                                   |
| `idAttachmentCover` | The ID of the image attachment the card should use as its cover, or null for none    |
| `idList`            | The ID of the list the card should be in                                             |
| `idLabels`          | Comma-separated list of label IDs                                                    |
| `idBoard`           | The ID of the board the card should be on                                            |
| `pos`               | The position of the card in its list. `top`, `bottom`, or a positive float           |
| `due`               | When the card is due, or `null`                                                      |
| `start`             | The start date of a card, or `null`                                                  |
| `dueComplete`       | Whether the status of the card is complete                                           |
| `subscribed`        | Whether the member is should be subscribed to the card                               |
| `address`           | For use with/by the Map View                                                         |
| `locationName`      | For use with/by the Map View                                                         |
| `coordinates`       | For use with/by the Map View. Should be latitude,longitude                           |
| `cover`             | Updates the card's cover                                                             |
| Option              | Values                                                                               | About                                                               |
| --------            | --------                                                                             | -------                                                             |
| color               | `pink`, `yellow`, `lime`, `blue`, `black`, `orange`, `red`, `purple`, `sky`, `green` | Makes the cover a solid color .                                     |
| brightness          | `dark`, `light`                                                                      | Determines whether the text on the cover should be dark or light.   |
| url                 | An unsplash URL: https://images.unsplash.com                                         | Used if making an image the cover. Only Unsplash URLs work.         |
| idAttachment        | ID of an attachment on the card                                                      | Used if setting an attached image as the cover.                     |
| size                | `normal`, `full`                                                                     | Determines whether to show the card name on the cover, or below it. |

`brightness` can be sent alongside any of the other parameters, but all of the other parameters are mutually exclusive; you can not have the cover be a `color` and an `idAttachment` at the same time.

On the brightness options, setting it to light will make the text on the card cover dark:
![](/cloud/trello/images/rest/cards/cover-brightness-dark.png)

And vice versa, setting it to dark will make the text on the card cover light:
![](/cloud/trello/images/rest/cards/cover-brightness-light.png) |

---

### Delete a Card

`DELETE` `/cards/:id`

---

### Get a field on a Card

`GET` `/cards/:id/:field`

Get a specific property of a card

**Path Parameters:**

| Parameter | Description        |
| --------- | ------------------ |
| `id`      | The ID of the Card |
| `field`   | The desired field. |

---

### Get Actions on a Card

`GET` `/cards/:id/actions`

List the Actions on a Card. See [Nested Resources](/cloud/trello/guides/rest-api/nested-resources/) for more information.

**Path Parameters:**

| Parameter | Description        |
| --------- | ------------------ |
| `id`      | The ID of the Card |

**Optional Query Parameters:**

| Parameter | Description                                                                                                           |
| --------- | --------------------------------------------------------------------------------------------------------------------- |
| `filter`  | A comma-separated list of [action types](https://developer.atlassian.com/cloud/trello/guides/rest-api/action-types/). |
| `page`    | The page of results for actions. Each page of results has 50 actions.                                                 |

---

### Get Attachments on a Card

`GET` `/cards/:id/attachments`

List the attachments on a card

**Optional Query Parameters:**

| Parameter | Description                                                                                               |
| --------- | --------------------------------------------------------------------------------------------------------- |
| `fields`  | `all` or a comma-separated list of attachment [fields](/cloud/trello/guides/rest-api/object-definitions/) |
| `filter`  | Use `cover` to restrict to just the cover attachment                                                      |

---

### Create Attachment On Card

`POST` `/cards/:id/attachments`

Create an Attachment to a Card. See https://glitch.com/~trello-attachments-api for code examples. You may need to remix the project in order to view it.

**Optional Query Parameters:**

| Parameter  | Description                                                           |
| ---------- | --------------------------------------------------------------------- |
| `name`     | The name of the attachment. Max length 256.                           |
| `file`     | The file to attach, as multipart/form-data                            |
| `mimeType` | The mimeType of the attachment. Max length 256                        |
| `url`      | A URL to attach. Must start with `http://` or `https://`              |
| `setCover` | Determines whether to use the new attachment as a cover for the Card. |

---

### Get an Attachment on a Card

`GET` `/cards/:id/attachments/:idAttachment`

Get a specific Attachment on a Card.

**Optional Query Parameters:**

| Parameter | Description                                           |
| --------- | ----------------------------------------------------- |
| `fields`  | The Attachment fields to be included in the response. |

---

### Delete an Attachment on a Card

`DELETE` `/cards/:id/attachments/:idAttachment`

Delete an Attachment

**Path Parameters:**

| Parameter      | Description                        |
| -------------- | ---------------------------------- |
| `id`           | The ID of the Card                 |
| `idAttachment` | The ID of the attachment to delete |

---

### Get the Board the Card is on

`GET` `/cards/:id/board`

Get the board a card is on

**Path Parameters:**

| Parameter | Description        |
| --------- | ------------------ |
| `id`      | The ID of the Card |

**Optional Query Parameters:**

| Parameter | Description                                                                                                       |
| --------- | ----------------------------------------------------------------------------------------------------------------- |
| `fields`  | `all` or a comma-separated list of board [fields](/cloud/trello/guides/rest-api/object-definitions/#board-object) |

---

### Get checkItems on a Card

`GET` `/cards/:id/checkItemStates`

Get the completed checklist items on a card

**Path Parameters:**

| Parameter | Description        |
| --------- | ------------------ |
| `id`      | The ID of the Card |

**Optional Query Parameters:**

| Parameter | Description                                                |
| --------- | ---------------------------------------------------------- |
| `fields`  | `all` or a comma-separated list of: `idCheckItem`, `state` |

---

### Get Checklists on a Card

`GET` `/cards/:id/checklists`

Get the checklists on a card

**Path Parameters:**

| Parameter | Description        |
| --------- | ------------------ |
| `id`      | The ID of the Card |

**Optional Query Parameters:**

| Parameter          | Description                                                                                 |
| ------------------ | ------------------------------------------------------------------------------------------- |
| `checkItems`       | `all` or `none`                                                                             |
| `checkItem_fields` | `all` or a comma-separated list of: `name,nameData,pos,state,type,due,dueReminder,idMember` |
| `filter`           | `all` or `none`                                                                             |
| `fields`           | `all` or a comma-separated list of: `idBoard,idCard,name,pos`                               |

---

### Create Checklist on a Card

`POST` `/cards/:id/checklists`

Create a new checklist on a card

**Path Parameters:**

| Parameter | Description        |
| --------- | ------------------ |
| `id`      | The ID of the Card |

**Optional Query Parameters:**

| Parameter           | Description                                                                               |
| ------------------- | ----------------------------------------------------------------------------------------- |
| `name`              | The name of the checklist                                                                 |
| `idChecklistSource` | The ID of a source checklist to copy into the new one                                     |
| `pos`               | The position of the checklist on the card. One of: `top`, `bottom`, or a positive number. |

---

### Get checkItem on a Card

`GET` `/cards/:id/checkItem/:idCheckItem`

Get a specific checkItem on a card

**Optional Query Parameters:**

| Parameter | Description                                                                                |
| --------- | ------------------------------------------------------------------------------------------ |
| `fields`  | `all` or a comma-separated list of `name,nameData,pos,state,type,due,dueReminder,idMember` |

---

### Update a checkItem on a Card

`PUT` `/cards/:id/checkItem/:idCheckItem`

Update an item in a checklist on a card.

**Optional Query Parameters:**

| Parameter     | Description                                     |
| ------------- | ----------------------------------------------- |
| `name`        | The new name for the checklist item             |
| `state`       | One of: `complete`, `incomplete`                |
| `idChecklist` | The ID of the checklist this item is in         |
| `pos`         | `top`, `bottom`, or a positive float            |
| `due`         | A due date for the checkitem                    |
| `dueReminder` | A dueReminder for the due date on the checkitem |
| `idMember`    | The ID of the member to remove from the card    |

---

### Delete checkItem on a Card

`DELETE` `/cards/:id/checkItem/:idCheckItem`

Delete a checklist item

---

### Get the List of a Card

`GET` `/cards/:id/list`

Get the list a card is in

**Path Parameters:**

| Parameter | Description        |
| --------- | ------------------ |
| `id`      | The ID of the Card |

**Optional Query Parameters:**

| Parameter | Description                                                                                         |
| --------- | --------------------------------------------------------------------------------------------------- |
| `fields`  | `all` or a comma-separated list of list [fields](/cloud/trello/guides/rest-api/object-definitions/) |

---

### Get the Members of a Card

`GET` `/cards/:id/members`

Get the members on a card

**Path Parameters:**

| Parameter | Description        |
| --------- | ------------------ |
| `id`      | The ID of the Card |

**Optional Query Parameters:**

| Parameter | Description                                                                                           |
| --------- | ----------------------------------------------------------------------------------------------------- |
| `fields`  | `all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/) |

---

### Get Members who have voted on a Card

`GET` `/cards/:id/membersVoted`

Get the members who have voted on a card

**Optional Query Parameters:**

| Parameter | Description                                                                                           |
| --------- | ----------------------------------------------------------------------------------------------------- |
| `fields`  | `all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/) |

---

### Add Member vote to Card

`POST` `/cards/:id/membersVoted`

Vote on the card for a given member.

**Required Query Parameters:**

| Parameter | Description                                    |
| --------- | ---------------------------------------------- |
| `value`   | The ID of the member to vote 'yes' on the card |

---

### Get pluginData on a Card

`GET` `/cards/:id/pluginData`

Get any shared pluginData on a card.

**Path Parameters:**

| Parameter | Description        |
| --------- | ------------------ |
| `id`      | The ID of the Card |

---

### Get Stickers on a Card

`GET` `/cards/:id/stickers`

Get the stickers on a card

**Path Parameters:**

| Parameter | Description        |
| --------- | ------------------ |
| `id`      | The ID of the Card |

**Optional Query Parameters:**

| Parameter | Description                                                                                            |
| --------- | ------------------------------------------------------------------------------------------------------ |
| `fields`  | `all` or a comma-separated list of sticker [fields](/cloud/trello/guides/rest-api/object-definitions/) |

---

### Add a Sticker to a Card

`POST` `/cards/:id/stickers`

Add a sticker to a card

**Required Query Parameters:**

| Parameter | Description                                                                                                           |
| --------- | --------------------------------------------------------------------------------------------------------------------- |
| `image`   | For custom stickers, the id of the sticker. For default stickers, the string identifier (like 'taco-cool', see below) |
| `top`     | The top position of the sticker, from -60 to 100                                                                      |
| `left`    | The left position of the sticker, from -60 to 100                                                                     |
| `zIndex`  | The z-index of the sticker                                                                                            |

**Optional Query Parameters:**

| Parameter | Description                 |
| --------- | --------------------------- |
| `rotate`  | The rotation of the sticker |

---

### Get a Sticker on a Card

`GET` `/cards/:id/stickers/:idSticker`

Get a specific sticker on a card

**Optional Query Parameters:**

| Parameter | Description                                                                                            |
| --------- | ------------------------------------------------------------------------------------------------------ |
| `fields`  | `all` or a comma-separated list of sticker [fields](/cloud/trello/guides/rest-api/object-definitions/) |

---

### Update a Sticker on a Card

`PUT` `/cards/:id/stickers/:idSticker`

Update a sticker on a card

**Required Query Parameters:**

| Parameter | Description                                       |
| --------- | ------------------------------------------------- |
| `top`     | The top position of the sticker, from -60 to 100  |
| `left`    | The left position of the sticker, from -60 to 100 |
| `zIndex`  | The z-index of the sticker                        |

**Optional Query Parameters:**

| Parameter | Description                 |
| --------- | --------------------------- |
| `rotate`  | The rotation of the sticker |

---

### Delete a Sticker on a Card

`DELETE` `/cards/:id/stickers/:idSticker`

Remove a sticker from the card

---

### Update Comment Action on a Card

`PUT` `/cards/:id/actions/:idAction/comments`

Update an existing comment

**Required Query Parameters:**

| Parameter | Description                  |
| --------- | ---------------------------- |
| `text`    | The new text for the comment |

---

### Delete a comment on a Card

`DELETE` `/cards/:id/actions/:idAction/comments`

Delete a comment

---

### Update Custom Field item on Card

`PUT` `/cards/:idCard/customField/:idCustomField/item`

Setting, updating, and removing the value for a Custom Field on a card. For more details on updating custom fields check out the [Getting Started With Custom Fields](/cloud/trello/guides/rest-api/getting-started-with-custom-fields/)

**Path Parameters:**

| Parameter       | Description                                                          |
| --------------- | -------------------------------------------------------------------- |
| `idCard`        | ID of the card that the Custom Field value should be set/updated for |
| `idCustomField` | ID of the Custom Field on the card.                                  |

---

### Update Multiple Custom Field items on Card

`PUT` `/cards/:idCard/customFields`

Setting, updating, and removing the values for multiple Custom Fields on a card. For more details on updating custom fields check out the [Getting Started With Custom Fields](/cloud/trello/guides/rest-api/getting-started-with-custom-fields/)

---

### Get Custom Field Items for a Card

`GET` `/cards/:id/customFieldItems`

Get the custom field items for a card.

**Path Parameters:**

| Parameter | Description        |
| --------- | ------------------ |
| `id`      | The ID of the Card |

---

### Add a new comment to a Card

`POST` `/cards/:id/actions/comments`

Add a new comment to a card

**Path Parameters:**

| Parameter | Description        |
| --------- | ------------------ |
| `id`      | The ID of the Card |

**Required Query Parameters:**

| Parameter | Description |
| --------- | ----------- |
| `text`    | The comment |

---

### Add a Label to a Card

`POST` `/cards/:id/idLabels`

Add a label to a card

**Path Parameters:**

| Parameter | Description        |
| --------- | ------------------ |
| `id`      | The ID of the Card |

**Optional Query Parameters:**

| Parameter | Description                |
| --------- | -------------------------- |
| `value`   | The ID of the label to add |

---

### Add a Member to a Card

`POST` `/cards/:id/idMembers`

Add a member to a card

**Path Parameters:**

| Parameter | Description        |
| --------- | ------------------ |
| `id`      | The ID of the Card |

**Optional Query Parameters:**

| Parameter | Description                             |
| --------- | --------------------------------------- |
| `value`   | The ID of the Member to add to the card |

---

### Create a new Label on a Card

`POST` `/cards/:id/labels`

Create a new label for the board and add it to the given card.

**Path Parameters:**

| Parameter | Description        |
| --------- | ------------------ |
| `id`      | The ID of the Card |

**Required Query Parameters:**

| Parameter | Description                                                                                    |
| --------- | ---------------------------------------------------------------------------------------------- |
| `color`   | A valid label color or `null`. See [labels](/cloud/trello/guides/rest-api/object-definitions/) |

**Optional Query Parameters:**

| Parameter | Description          |
| --------- | -------------------- |
| `name`    | A name for the label |

---

### Mark a Card's Notifications as read

`POST` `/cards/:id/markAssociatedNotificationsRead`

Mark notifications about this card as read

**Path Parameters:**

| Parameter | Description        |
| --------- | ------------------ |
| `id`      | The ID of the Card |

---

### Remove a Label from a Card

`DELETE` `/cards/:id/idLabels/:idLabel`

Remove a label from a card

**Path Parameters:**

| Parameter | Description                   |
| --------- | ----------------------------- |
| `id`      | The ID of the Card            |
| `idLabel` | The ID of the label to remove |

---

### Remove a Member from a Card

`DELETE` `/cards/:id/idMembers/:idMember`

Remove a member from a card

**Path Parameters:**

| Parameter  | Description                                  |
| ---------- | -------------------------------------------- |
| `id`       | The ID of the Card                           |
| `idMember` | The ID of the member to remove from the card |

---

### Remove a Member's Vote on a Card

`DELETE` `/cards/:id/membersVoted/:idMember`

Remove a member's vote from a card

**Path Parameters:**

| Parameter  | Description                               |
| ---------- | ----------------------------------------- |
| `id`       | The ID of the Card                        |
| `idMember` | The ID of the member whose vote to remove |

---

### Update Checkitem on Checklist on Card

`PUT` `/cards/:idCard/checklist/:idChecklist/checkItem/:idCheckItem`

Update an item in a checklist on a card.

**Path Parameters:**

| Parameter     | Description                            |
| ------------- | -------------------------------------- |
| `idCard`      | The ID of the Card                     |
| `idCheckItem` | The ID of the checklist item to update |
| `idChecklist` | The ID of the item to update.          |

**Optional Query Parameters:**

| Parameter | Description                          |
| --------- | ------------------------------------ |
| `pos`     | `top`, `bottom`, or a positive float |

---

### Delete a Checklist on a Card

`DELETE` `/cards/:id/checklists/:idChecklist`

Delete a checklist from a card

**Path Parameters:**

| Parameter     | Description                       |
| ------------- | --------------------------------- |
| `id`          | The ID of the Card                |
| `idChecklist` | The ID of the checklist to delete |

---

## Checklists

### Create a Checklist

`POST` `/checklists`

**Required Query Parameters:**

| Parameter | Description                                               |
| --------- | --------------------------------------------------------- |
| `idCard`  | The ID of the Card that the checklist should be added to. |

**Optional Query Parameters:**

| Parameter           | Description                                                                               |
| ------------------- | ----------------------------------------------------------------------------------------- |
| `name`              | The name of the checklist. Should be a string of length 1 to 16384.                       |
| `pos`               | The position of the checklist on the card. One of: `top`, `bottom`, or a positive number. |
| `idChecklistSource` | The ID of a checklist to copy into the new checklist.                                     |

---

### Get a Checklist

`GET` `/checklists/:id`

**Optional Query Parameters:**

| Parameter          | Description                                                                                                                                                                                                                                   |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `cards`            | Valid values: `all`, `closed`, `none`, `open`, `visible`. Cards is a nested resource. The additional query params available are documented at [Cards Nested Resource](/cloud/trello/guides/rest-api/nested-resources/#cards-nested-resource). |
| `checkItems`       | The check items on the list to return. One of: `all`, `none`.                                                                                                                                                                                 |
| `checkItem_fields` | The fields on the checkItem to return if checkItems are being returned. `all` or a comma-separated list of: `name`, `nameData`, `pos`, `state`, `type`, `due`, `dueReminder`, `idMember`                                                      |
| `fields`           | `all` or a comma-separated list of checklist [fields](/cloud/trello/guides/rest-api/object-definitions/)                                                                                                                                      |

---

### Update a Checklist

`PUT` `/checklists/:id`

Update an existing checklist.

**Optional Query Parameters:**

| Parameter | Description                                                                                          |
| --------- | ---------------------------------------------------------------------------------------------------- |
| `name`    | Name of the new checklist being created. Should be length of 1 to 16384.                             |
| `pos`     | Determines the position of the checklist on the card. One of: `top`, `bottom`, or a positive number. |

---

### Delete a Checklist

`DELETE` `/checklists/:id`

Delete a checklist

---

### Get field on a Checklist

`GET` `/checklists/:id/:field`

---

### Update field on a Checklist

`PUT` `/checklists/:id/:field`

**Required Query Parameters:**

| Parameter | Description                                                                         |
| --------- | ----------------------------------------------------------------------------------- |
| `value`   | The value to change the checklist name to. Should be a string of length 1 to 16384. |

---

### Get the Board the Checklist is on

`GET` `/checklists/:id/board`

**Path Parameters:**

| Parameter | Description        |
| --------- | ------------------ |
| `id`      | ID of a checklist. |

**Optional Query Parameters:**

| Parameter | Description                                                                                          |
| --------- | ---------------------------------------------------------------------------------------------------- |
| `fields`  | `all` or a comma-separated list of board [fields](/cloud/trello/guides/rest-api/object-definitions/) |

---

### Get the Card a Checklist is on

`GET` `/checklists/:id/cards`

**Path Parameters:**

| Parameter | Description        |
| --------- | ------------------ |
| `id`      | ID of a checklist. |

---

### Get Checkitems on a Checklist

`GET` `/checklists/:id/checkItems`

**Optional Query Parameters:**

| Parameter | Description                                                                                 |
| --------- | ------------------------------------------------------------------------------------------- |
| `filter`  | One of: `all`, `none`.                                                                      |
| `fields`  | One of: `all`, `name`, `nameData`, `pos`, `state`,`type`, `due`, `dueReminder`, `idMember`. |

---

### Create Checkitem on Checklist

`POST` `/checklists/:id/checkItems`

**Required Query Parameters:**

| Parameter | Description                                                                               |
| --------- | ----------------------------------------------------------------------------------------- |
| `name`    | The name of the new check item on the checklist. Should be a string of length 1 to 16384. |

**Optional Query Parameters:**

| Parameter     | Description                                                                                     |
| ------------- | ----------------------------------------------------------------------------------------------- |
| `pos`         | The position of the check item in the checklist. One of: `top`, `bottom`, or a positive number. |
| `checked`     | Determines whether the check item is already checked when created.                              |
| `due`         | A due date for the checkitem                                                                    |
| `dueReminder` | A dueReminder for the due date on the checkitem                                                 |
| `idMember`    | An ID of a member resource.                                                                     |

---

### Get a Checkitem on a Checklist

`GET` `/checklists/:id/checkItems/:idCheckItem`

**Optional Query Parameters:**

| Parameter | Description                                                                                   |
| --------- | --------------------------------------------------------------------------------------------- |
| `fields`  | One of: `all`, `name`, `nameData`, `pos`, `state`, `type`, `due`, `dueReminder`, `idMember`,. |

---

### Delete Checkitem from Checklist

`DELETE` `/checklists/:id/checkItems/:idCheckItem`

Remove an item from a checklist

---

## CustomFields

### Create a new Custom Field on a Board

`POST` `/customFields`

Create a new Custom Field on a board.

---

### Get a Custom Field

`GET` `/customFields/:id`

---

### Update a Custom Field definition

`PUT` `/customFields/:id`

Update a Custom Field definition.

---

### Delete a Custom Field definition

`DELETE` `/customFields/:id`

Delete a Custom Field from a board.

---

### Get Options of Custom Field drop down

`GET` `/customFields/:id/options`

Get the options of a drop down Custom Field

---

### Add Option to Custom Field dropdown

`POST` `/customFields/:id/options`

Add an option to a dropdown Custom Field

---

### Get Option of Custom Field dropdown

`GET` `/customFields/:id/options/:idCustomFieldOption`

Retrieve a specific, existing Option on a given dropdown-type Custom Field

---

### Delete Option of Custom Field dropdown

`DELETE` `/customFields/:id/options/:idCustomFieldOption`

Delete an option from a Custom Field dropdown.

---

## Emoji

### List available Emoji

`GET` `/emoji`

**Optional Query Parameters:**

| Parameter      | Description                                                                                      |
| -------------- | ------------------------------------------------------------------------------------------------ |
| `locale`       | The locale to return emoji descriptions and names in. Defaults to the logged in member's locale. |
| `spritesheets` | `true` to return spritesheet URLs in the response                                                |

---

## Enterprises

### Get an Enterprise

`GET` `/enterprises/:id`

Get an enterprise by its ID.

**Path Parameters:**

| Parameter | Description                       |
| --------- | --------------------------------- |
| `id`      | ID of the enterprise to retrieve. |

**Optional Query Parameters:**

| Parameter                    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `fields`                     | Comma-separated list of: `id`, `name`, `displayName`, `prefs`, `ssoActivationFailed`, `idAdmins`, `idMembers` (Note that the members array returned will be paginated if `members` is 'normal' or 'admins'. Pagination can be controlled with member_startIndex, etc, but the API response will not contain the total available result count or pagination status data.), `idOrganizations`, `products`, `userTypes`, `idMembers`, `idOrganizations` |
| `members`                    | One of: `none`, `normal`, `admins`, `owners`, `all`                                                                                                                                                                                                                                                                                                                                                                                                  |
| `member_fields`              | One of: `avatarHash`, `fullName`, `initials`, `username`                                                                                                                                                                                                                                                                                                                                                                                             |
| `member_filter`              | Pass a SCIM-style query to filter members. This takes precedence over the all/normal/admins value of members. If any of the member\_\* args are set, the member array will be paginated.                                                                                                                                                                                                                                                             |
| `member_sort`                | This parameter expects a SCIM-style sorting value prefixed by a `-` to sort descending. If no `-` is prefixed, it will be sorted ascending. Note that the members array returned will be paginated if `members` is 'normal' or 'admins'. Pagination can be controlled with member_startIndex, etc, but the API response will not contain the total available result count or pagination status data.                                                 |
| `member_sortBy`              | Deprecated: Please use member_sort. This parameter expects a SCIM-style sorting value. Note that the members array returned will be paginated if `members` is `normal` or `admins`. Pagination can be controlled with `member_startIndex`, etc, and the API response's header will contain the total count and pagination state.                                                                                                                     |
| `member_sortOrder`           | Deprecated: Please use member_sort. One of: `ascending`, `descending`, `asc`, `desc`                                                                                                                                                                                                                                                                                                                                                                 |
| `member_startIndex`          | Any integer between 0 and 100.                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `member_count`               | 0 to 100                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `organizations`              | One of: `none`, `members`, `public`, `all`                                                                                                                                                                                                                                                                                                                                                                                                           |
| `organization_fields`        | Any valid value that the [nested organization field resource]() accepts.                                                                                                                                                                                                                                                                                                                                                                             |
| `organization_paid_accounts` | Whether or not to include paid account information in the returned workspace objects                                                                                                                                                                                                                                                                                                                                                                 |
| `organization_memberships`   | Comma-seperated list of: `me`, `normal`, `admin`, `active`, `deactivated`                                                                                                                                                                                                                                                                                                                                                                            |

---

### Get auditlog data for an Enterprise

`GET` `/enterprises/:id/auditlog`

Returns an array of Actions related to the Enterprise object. Used for populating data sent to Google Sheets from an Enterprise's audit log page: https://trello.com/e/{enterprise_name}/admin/auditlog. An Enterprise admin token is required for this route.

NOTE: For enterprises that have opted in to user management via AdminHub, the auditlog will will contain actions taken in AdminHub, but may not contain the source for those actions.

**Path Parameters:**

| Parameter | Description                       |
| --------- | --------------------------------- |
| `id`      | ID of the enterprise to retrieve. |

---

### Get Enterprise admin Members

`GET` `/enterprises/:id/admins`

Get an enterprise's admin members.

**Path Parameters:**

| Parameter | Description                       |
| --------- | --------------------------------- |
| `id`      | ID of the enterprise to retrieve. |

**Optional Query Parameters:**

| Parameter | Description                                                        |
| --------- | ------------------------------------------------------------------ |
| `fields`  | Any valid value that the [nested member field resource]() accepts. |

---

### Get signupUrl for Enterprise

`GET` `/enterprises/:id/signupUrl`

Get the signup URL for an enterprise.

**Path Parameters:**

| Parameter | Description                       |
| --------- | --------------------------------- |
| `id`      | ID of the enterprise to retrieve. |

**Optional Query Parameters:**

| Parameter              | Description                                                                                                                         |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `authenticate`         |                                                                                                                                     |
| `confirmationAccepted` |                                                                                                                                     |
| `returnUrl`            | Any valid URL.                                                                                                                      |
| `tosAccepted`          | Designates whether the user has seen/consented to the Trello ToS prior to being redirected to the enterprise signup page/their IdP. |

---

### Get Users of an Enterprise

`GET` `/enterprises/:id/members/query`

Get an enterprise's users. You can choose to retrieve licensed members, board guests, etc. The response is paginated and will return 100 users at a time.

**Path Parameters:**

| Parameter | Description                       |
| --------- | --------------------------------- |
| `id`      | ID of the enterprise to retrieve. |

**Optional Query Parameters:**

| Parameter       | Description                                                                                                                                                                                                                                  |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `licensed`      | When true, returns members who possess a license for the corresponding Trello Enterprise; when false, returns members who do not. If unspecified, both licensed and unlicensed members will be returned.                                     |
| `deactivated`   | When true, returns members who have been deactivated for the corresponding Trello Enterprise; when false, returns members who have not. If unspecified, both active and deactivated members will be returned.                                |
| `collaborator`  | When true, returns members who are guests on one or more boards in the corresponding Trello Enterprise (but do not possess a license); when false, returns members who are not. If unspecified, both guests and non-guests will be returned. |
| `managed`       | When true, returns members who are managed by the corresponding Trello Enterprise; when false, returns members who are not. If unspecified, both managed and unmanaged members will be returned.                                             |
| `admin`         | When true, returns members who are administrators of the corresponding Trello Enterprise; when false, returns members who are not. If unspecified, both admin and non-admin members will be returned.                                        |
| `activeSince`   | Returns only Trello users active since this date (inclusive).                                                                                                                                                                                |
| `inactiveSince` | Returns only Trello users active since this date (inclusive).                                                                                                                                                                                |
| `search`        | Returns members with email address or full name that start with the search value.                                                                                                                                                            |
| `cursor`        | Cursor to return next set of results, use cursor returned in the response to query the next batch.                                                                                                                                           |

---

### Get Members of Enterprise

`GET` `/enterprises/:id/members`

Get the members of an enterprise.

**Path Parameters:**

| Parameter | Description                       |
| --------- | --------------------------------- |
| `id`      | ID of the Enterprise to retrieve. |

**Optional Query Parameters:**

| Parameter             | Description                                                                                                                                                                                                                                                                                                                                                                                          |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `fields`              | A comma-seperated list of valid [member fields](/cloud/trello/guides/rest-api/object-definitions/#member-object).                                                                                                                                                                                                                                                                                    |
| `filter`              | Pass a SCIM-style query to filter members. This takes precedence over the all/normal/admins value of members. If any of the below member\_\* args are set, the member array will be paginated.                                                                                                                                                                                                       |
| `sort`                | This parameter expects a SCIM-style sorting value prefixed by a `-` to sort descending. If no `-` is prefixed, it will be sorted ascending. Note that the members array returned will be paginated if `members` is 'normal' or 'admins'. Pagination can be controlled with member_startIndex, etc, but the API response will not contain the total available result count or pagination status data. |
| `sortBy`              | Deprecated: Please use `sort` instead. This parameter expects a SCIM-style sorting value. Note that the members array returned will be paginated if `members` is 'normal' or 'admins'. Pagination can be controlled with member_startIndex, etc, but the API response will not contain the total available result count or pagination status data.                                                   |
| `sortOrder`           | Deprecated: Please use `sort` instead. One of: `ascending`, `descending`, `asc`, `desc`.                                                                                                                                                                                                                                                                                                             |
| `startIndex`          | Any integer between 0 and 9999.                                                                                                                                                                                                                                                                                                                                                                      |
| `count`               | SCIM-style filter.                                                                                                                                                                                                                                                                                                                                                                                   |
| `organization_fields` | Any valid value that the [nested organization field resource](/cloud/trello/guides/rest-api/nested-resources/) accepts.                                                                                                                                                                                                                                                                              |
| `board_fields`        | Any valid value that the [nested board resource](/cloud/trello/guides/rest-api/nested-resources/) accepts.                                                                                                                                                                                                                                                                                           |

---

### Get a Member of Enterprise

`GET` `/enterprises/:id/members/:idMember`

Get a specific member of an enterprise by ID.

**Path Parameters:**

| Parameter  | Description                       |
| ---------- | --------------------------------- |
| `id`       | ID of the enterprise to retrieve. |
| `idMember` | An ID of a member resource.       |

**Optional Query Parameters:**

| Parameter             | Description                                                                                                             |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `fields`              | A comma separated list of any valid values that the [nested member field resource]() accepts.                           |
| `organization_fields` | Any valid value that the [nested organization field resource](/cloud/trello/guides/rest-api/nested-resources/) accepts. |
| `board_fields`        | Any valid value that the [nested board resource](/cloud/trello/guides/rest-api/nested-resources/) accepts.              |

---

### Get whether an organization can be transferred to an enterprise.

`GET` `/enterprises/:id/transferrable/organization/:idOrganization`

**Path Parameters:**

| Parameter        | Description                        |
| ---------------- | ---------------------------------- |
| `id`             | ID of the Enterprise to retrieve.  |
| `idOrganization` | An ID of an Organization resource. |

---

### Get a bulk list of organizations that can be transferred to an enterprise.

`GET` `/enterprises/:id/transferrable/bulk/:idOrganizations`

Get a list of organizations that can be transferred to an enterprise when given a bulk list of organizations.

**Path Parameters:**

| Parameter         | Description                                  |
| ----------------- | -------------------------------------------- |
| `id`              | ID of the Enterprise to retrieve.            |
| `idOrganizations` | An array of IDs of an Organization resource. |

---

### Decline enterpriseJoinRequests from one organization or a bulk list of organizations.

`PUT` `/enterprises/$:id/enterpriseJoinRequest/bulk`

Decline enterpriseJoinRequests from one organization or bulk amount of organizations

**Path Parameters:**

| Parameter | Description                       |
| --------- | --------------------------------- |
| `id`      | ID of the Enterprise to retrieve. |

**Required Query Parameters:**

| Parameter         | Description                                  |
| ----------------- | -------------------------------------------- |
| `idOrganizations` | An array of IDs of an Organization resource. |

---

### Get ClaimableOrganizations of an Enterprise

`GET` `/enterprises/:id/claimableOrganizations`

Get the Workspaces that are claimable by the enterprise by ID. Can optionally query for workspaces based on activeness/ inactiveness.

**Path Parameters:**

| Parameter | Description                      |
| --------- | -------------------------------- |
| `id`      | ID of the enterprise to retrieve |

**Optional Query Parameters:**

| Parameter       | Description                                                                                 |
| --------------- | ------------------------------------------------------------------------------------------- |
| `limit`         | Limits the number of workspaces to be sorted                                                |
| `cursor`        | Specifies the sort order to return matching documents                                       |
| `name`          | Name of the enterprise to retrieve workspaces for                                           |
| `activeSince`   | Date in YYYY-MM-DD format indicating the date to search up to for activeness of workspace   |
| `inactiveSince` | Date in YYYY-MM-DD format indicating the date to search up to for inactiveness of workspace |

---

### Get PendingOrganizations of an Enterprise

`GET` `/enterprises/:id/pendingOrganizations`

Get the Workspaces that are pending for the enterprise by ID.

**Path Parameters:**

| Parameter | Description                      |
| --------- | -------------------------------- |
| `id`      | ID of the enterprise to retrieve |

**Optional Query Parameters:**

| Parameter       | Description                                                                                 |
| --------------- | ------------------------------------------------------------------------------------------- |
| `activeSince`   | Date in YYYY-MM-DD format indicating the date to search up to for activeness of workspace   |
| `inactiveSince` | Date in YYYY-MM-DD format indicating the date to search up to for inactiveness of workspace |

---

### Create an auth Token for an Enterprise.

`POST` `/enterprises/:id/tokens`

**Path Parameters:**

| Parameter | Description                       |
| --------- | --------------------------------- |
| `id`      | ID of the enterprise to retrieve. |

**Optional Query Parameters:**

| Parameter    | Description                                |
| ------------ | ------------------------------------------ |
| `expiration` | One of: `1hour`, `1day`, `30days`, `never` |

---

### Get Organizations of an Enterprise

`GET` `/enterprises/:id/organizations`

Get the organizations of an enterprise.

**Path Parameters:**

| Parameter | Description                       |
| --------- | --------------------------------- |
| `id`      | ID of the Enterprise to retrieve. |

**Optional Query Parameters:**

| Parameter    | Description                                                                                      |
| ------------ | ------------------------------------------------------------------------------------------------ |
| `fields`     | comma-separated list of organization [fields](/cloud/trello/guides/rest-api/object-definitions/) |
| `filter`     |                                                                                                  |
| `startIndex` | Any integer greater than and equal to 1.                                                         |
| `count`      | Any integer between 0 and 100.                                                                   |

---

### Transfer an Organization to an Enterprise.

`PUT` `/enterprises/:id/organizations`

Transfer an organization to an enterprise.

NOTE: For enterprises that have opted in to user management via AdminHub, this endpoint will result in the organization being added to the enterprise asynchronously. A 200 response only indicates receipt of the request, it does not indicate successful addition to the enterprise.

**Path Parameters:**

| Parameter | Description                       |
| --------- | --------------------------------- |
| `id`      | ID of the Enterprise to retrieve. |

**Required Query Parameters:**

| Parameter        | Description                                         |
| ---------------- | --------------------------------------------------- |
| `idOrganization` | ID of Organization to be transferred to Enterprise. |

---

### Update a Member's licensed status

`PUT` `/enterprises/:id/members/:idMember/licensed`

This endpoint is used to update whether the provided Member should use one of the Enterprise's available licenses or not. Revoking a license will deactivate a Member of an Enterprise.

NOTE: Revoking of licenses is not possible for enterprises that have opted in to user management via AdminHub.

**Path Parameters:**

| Parameter  | Description           |
| ---------- | --------------------- |
| `id`       | ID of the Enterprise. |
| `idMember` | The ID of the Member  |

**Required Query Parameters:**

| Parameter | Description                                                                                              |
| --------- | -------------------------------------------------------------------------------------------------------- |
| `value`   | Boolean value to determine whether the user should be given an Enterprise license (true) or not (false). |

---

### Deactivate a Member of an Enterprise.

`PUT` `/enterprises/:id/members/:idMember/deactivated`

Deactivate a Member of an Enterprise.

NOTE: Deactivation is not possible for enterprises that have opted in to user management via AdminHub.

**Path Parameters:**

| Parameter  | Description                       |
| ---------- | --------------------------------- |
| `id`       | ID of the enterprise to retrieve. |
| `idMember` | ID of the Member to deactive.     |

**Required Query Parameters:**

| Parameter | Description                                        |
| --------- | -------------------------------------------------- |
| `value`   | Determines whether the user is deactivated or not. |

**Optional Query Parameters:**

| Parameter             | Description                                                                                                       |
| --------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `fields`              | A comma separated list of any valid values that the [nested member field resource]() accepts.                     |
| `organization_fields` | Any valid value that the [nested organization resource](/cloud/trello/guides/rest-api/nested-resources/) accepts. |
| `board_fields`        | Any valid value that the [nested board resource](/cloud/trello/guides/rest-api/nested-resources/) accepts.        |

---

### Update Member to be admin of Enterprise

`PUT` `/enterprises/:id/admins/:idMember`

Make Member an admin of Enterprise.

NOTE: This endpoint is not available to enterprises that have opted in to user management via AdminHub.

**Path Parameters:**

| Parameter  | Description                                     |
| ---------- | ----------------------------------------------- |
| `id`       | ID of the enterprise to retrieve.               |
| `idMember` | ID of member to be made an admin of enterprise. |

---

### Remove a Member as admin from Enterprise.

`DELETE` `/enterprises/:id/admins/:idMember`

Remove a member as admin from an enterprise.

NOTE: This endpoint is not available to enterprises that have opted in to user management via AdminHub.

**Path Parameters:**

| Parameter  | Description                                                 |
| ---------- | ----------------------------------------------------------- |
| `id`       | ID of the Enterprise to retrieve.                           |
| `idMember` | ID of the member to be removed as an admin from enterprise. |

---

### Delete an Organization from an Enterprise.

`DELETE` `/enterprises/:id/organizations/:idOrg`

Remove an organization from an enterprise.

**Path Parameters:**

| Parameter | Description                                               |
| --------- | --------------------------------------------------------- |
| `id`      | ID of the enterprise to retrieve.                         |
| `idOrg`   | ID of the organization to be removed from the enterprise. |

---

### Bulk accept a set of organizations to an Enterprise.

`GET` `/enterprises/:id/organizations/bulk/:idOrganizations`

Accept an array of organizations to an enterprise.

NOTE: For enterprises that have opted in to user management via AdminHub, this endpoint will result in organizations being added to the enterprise asynchronously. A 200 response only indicates receipt of the request, it does not indicate successful addition to the enterprise.

**Path Parameters:**

| Parameter         | Description                                                             |
| ----------------- | ----------------------------------------------------------------------- |
| `id`              | ID of the enterprise to retrieve.                                       |
| `idOrganizations` | An array of IDs of the organizations to be removed from the enterprise. |

---

## Labels

### Get a Label

`GET` `/labels/:id`

Get information about a single Label.

**Optional Query Parameters:**

| Parameter | Description                                                                                  |
| --------- | -------------------------------------------------------------------------------------------- |
| `fields`  | all or a comma-separated list of [fields](/cloud/trello/guides/rest-api/object-definitions/) |

---

### Update a Label

`PUT` `/labels/:id`

Update a label by ID.

**Optional Query Parameters:**

| Parameter | Description                                                                                                     |
| --------- | --------------------------------------------------------------------------------------------------------------- |
| `name`    | The new name for the label                                                                                      |
| `color`   | The new color for the label. See: [fields](/cloud/trello/guides/rest-api/object-definitions/) for color options |

---

### Delete a Label

`DELETE` `/labels/:id`

Delete a label by ID.

---

### Update a field on a label

`PUT` `/labels/:id/:field`

Update a field on a label.

**Path Parameters:**

| Parameter | Description                       |
| --------- | --------------------------------- |
| `id`      | The id of the label               |
| `field`   | The field on the Label to update. |

**Required Query Parameters:**

| Parameter | Description                  |
| --------- | ---------------------------- |
| `value`   | The new value for the field. |

---

### Create a Label

`POST` `/labels`

Create a new Label on a Board.

**Required Query Parameters:**

| Parameter | Description                                 |
| --------- | ------------------------------------------- |
| `name`    | Name for the label                          |
| `color`   | The color for the label.                    |
| `idBoard` | The ID of the Board to create the Label on. |

---

## Lists

### Get a List

`GET` `/lists/:id`

Get information about a List

**Optional Query Parameters:**

| Parameter | Description                                          |
| --------- | ---------------------------------------------------- |
| `fields`  | `all` or a comma separated list of List field names. |

---

### Update a List

`PUT` `/lists/:id`

Update the properties of a List

**Optional Query Parameters:**

| Parameter    | Description                                                                     |
| ------------ | ------------------------------------------------------------------------------- |
| `name`       | New name for the list                                                           |
| `closed`     | Whether the list should be closed (archived)                                    |
| `idBoard`    | ID of a board the list should be moved to                                       |
| `pos`        | New position for the list: `top`, `bottom`, or a positive floating point number |
| `subscribed` | Whether the active member is subscribed to this list                            |

---

### Create a new List

`POST` `/lists`

Create a new List on a Board

**Required Query Parameters:**

| Parameter | Description                                            |
| --------- | ------------------------------------------------------ |
| `name`    | Name for the list                                      |
| `idBoard` | The long ID of the board the list should be created on |

**Optional Query Parameters:**

| Parameter      | Description                                                                |
| -------------- | -------------------------------------------------------------------------- |
| `idListSource` | ID of the List to copy into the new List                                   |
| `pos`          | Position of the list. `top`, `bottom`, or a positive floating point number |

---

### Archive all Cards in List

`POST` `/lists/:id/archiveAllCards`

Archive all cards in a list

**Path Parameters:**

| Parameter | Description        |
| --------- | ------------------ |
| `id`      | The ID of the list |

---

### Move all Cards in List

`POST` `/lists/:id/moveAllCards`

Move all Cards in a List

**Path Parameters:**

| Parameter | Description        |
| --------- | ------------------ |
| `id`      | The ID of the list |

**Required Query Parameters:**

| Parameter | Description                                          |
| --------- | ---------------------------------------------------- |
| `idBoard` | The ID of the board the cards should be moved to     |
| `idList`  | The ID of the list that the cards should be moved to |

---

### Archive or unarchive a list

`PUT` `/lists/:id/closed`

**Path Parameters:**

| Parameter | Description        |
| --------- | ------------------ |
| `id`      | The ID of the list |

**Optional Query Parameters:**

| Parameter | Description                             |
| --------- | --------------------------------------- |
| `value`   | Set to true to close (archive) the list |

---

### Move List to Board

`PUT` `/lists/:id/idBoard`

Move a List to a different Board

**Path Parameters:**

| Parameter | Description        |
| --------- | ------------------ |
| `id`      | The ID of the list |

**Required Query Parameters:**

| Parameter | Description                             |
| --------- | --------------------------------------- |
| `value`   | The ID of the board to move the list to |

---

### Update a field on a List

`PUT` `/lists/:id/:field`

Rename a list

**Path Parameters:**

| Parameter | Description                         |
| --------- | ----------------------------------- |
| `id`      | The ID of the list                  |
| `field`   | The field on the List to be updated |

**Optional Query Parameters:**

| Parameter | Description                 |
| --------- | --------------------------- |
| `value`   | The new value for the field |

---

### Get Actions for a List

`GET` `/lists/:id/actions`

Get the Actions on a List

**Path Parameters:**

| Parameter | Description        |
| --------- | ------------------ |
| `id`      | The ID of the list |

**Optional Query Parameters:**

| Parameter | Description                                                                                                           |
| --------- | --------------------------------------------------------------------------------------------------------------------- |
| `filter`  | A comma-separated list of [action types](https://developer.atlassian.com/cloud/trello/guides/rest-api/action-types/). |

---

### Get the Board a List is on

`GET` `/lists/:id/board`

Get the board a list is on

**Path Parameters:**

| Parameter | Description        |
| --------- | ------------------ |
| `id`      | The ID of the list |

**Optional Query Parameters:**

| Parameter | Description                                                                                                       |
| --------- | ----------------------------------------------------------------------------------------------------------------- |
| `fields`  | `all` or a comma-separated list of board [fields](/cloud/trello/guides/rest-api/object-definitions/#board-object) |

---

### Get Cards in a List

`GET` `/lists/:id/cards`

List the cards in a list

**Path Parameters:**

| Parameter | Description        |
| --------- | ------------------ |
| `id`      | The ID of the list |

---

## Members

### Get a Member

`GET` `/members/:id`

Get a member

**Path Parameters:**

| Parameter | Description                      |
| --------- | -------------------------------- |
| `id`      | The ID or username of the member |

**Optional Query Parameters:**

| Parameter                     | Description                                                                                                                   |
| ----------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `actions`                     | See the [Actions Nested Resource](/cloud/trello/guides/rest-api/nested-resources/#actions-nested-resource)                    |
| `boards`                      | See the [Boards Nested Resource](/cloud/trello/guides/rest-api/nested-resources/#boards-nested-resource)                      |
| `boardBackgrounds`            | One of: `all`, `custom`, `default`, `none`, `premium`                                                                         |
| `boardsInvited`               | `all` or a comma-separated list of: closed, members, open, organization, pinned, public, starred, unpinned                    |
| `boardsInvited_fields`        | `all` or a comma-separated list of board [fields](/cloud/trello/guides/rest-api/object-definitions/)                          |
| `boardStars`                  | Whether to return the boardStars or not                                                                                       |
| `cards`                       | See the [Cards Nested Resource](/cloud/trello/guides/rest-api/nested-resources/#cards-nested-resource) for additional options |
| `customBoardBackgrounds`      | `all` or `none`                                                                                                               |
| `customEmoji`                 | `all` or `none`                                                                                                               |
| `customStickers`              | `all` or `none`                                                                                                               |
| `fields`                      | `all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/)                         |
| `notifications`               | See the [Notifications Nested Resource](/cloud/trello/guides/rest-api/nested-resources/#notifications-nested-resource)        |
| `organizations`               | One of: `all`, `members`, `none`, `public`                                                                                    |
| `organization_fields`         | `all` or a comma-separated list of organization [fields](/cloud/trello/guides/rest-api/object-definitions/)                   |
| `organization_paid_account`   | Whether or not to include paid account information in the returned workspace object                                           |
| `organizationsInvited`        | One of: `all`, `members`, `none`, `public`                                                                                    |
| `organizationsInvited_fields` | `all` or a comma-separated list of organization [fields](/cloud/trello/guides/rest-api/object-definitions/)                   |
| `paid_account`                | Whether or not to include paid account information in the returned member object                                              |
| `savedSearches`               |                                                                                                                               |
| `tokens`                      | `all` or `none`                                                                                                               |

---

### Update a Member

`PUT` `/members/:id`

**Path Parameters:**

| Parameter | Description                      |
| --------- | -------------------------------- |
| `id`      | The ID or username of the member |

**Optional Query Parameters:**

| Parameter                       | Description                                                                                                                |
| ------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `fullName`                      | New name for the member. Cannot begin or end with a space.                                                                 |
| `initials`                      | New initials for the member. 1-4 characters long.                                                                          |
| `username`                      | New username for the member. At least 3 characters long, only lowercase letters, underscores, and numbers. Must be unique. |
| `bio`                           |                                                                                                                            |
| `avatarSource`                  | One of: `gravatar`, `none`, `upload`                                                                                       |
| `prefs/colorBlind`              |                                                                                                                            |
| `prefs/locale`                  |                                                                                                                            |
| `prefs/minutesBetweenSummaries` | `-1` for disabled, `1`, or `60`                                                                                            |

---

### Get a field on a Member

`GET` `/members/:id/:field`

Get a particular property of a member

**Path Parameters:**

| Parameter | Description                                                                   |
| --------- | ----------------------------------------------------------------------------- |
| `id`      | The ID or username of the member                                              |
| `field`   | One of the member [fields](/cloud/trello/guides/rest-api/object-definitions/) |

---

### Get a Member's Actions

`GET` `/members/:id/actions`

List the actions for a member

**Path Parameters:**

| Parameter | Description                      |
| --------- | -------------------------------- |
| `id`      | The ID or username of the member |

**Optional Query Parameters:**

| Parameter | Description                                                                                                           |
| --------- | --------------------------------------------------------------------------------------------------------------------- |
| `filter`  | A comma-separated list of [action types](https://developer.atlassian.com/cloud/trello/guides/rest-api/action-types/). |

---

### Get Member's custom Board backgrounds

`GET` `/members/:id/boardBackgrounds`

Get a member's custom board backgrounds

**Path Parameters:**

| Parameter | Description                      |
| --------- | -------------------------------- |
| `id`      | The ID or username of the member |

**Optional Query Parameters:**

| Parameter | Description                                           |
| --------- | ----------------------------------------------------- |
| `filter`  | One of: `all`, `custom`, `default`, `none`, `premium` |

---

### Upload new boardBackground for Member

`POST` `/members/:id/boardBackgrounds`

Upload a new boardBackground

**Path Parameters:**

| Parameter | Description                      |
| --------- | -------------------------------- |
| `id`      | The ID or username of the member |

**Required Query Parameters:**

| Parameter | Description |
| --------- | ----------- |
| `file`    |             |

---

### Get a boardBackground of a Member

`GET` `/members/:id/boardBackgrounds/:idBackground`

Get a member's board background

**Optional Query Parameters:**

| Parameter | Description                                                                       |
| --------- | --------------------------------------------------------------------------------- |
| `fields`  | `all` or a comma-separated list of: `brightness`, `fullSizeUrl`, `scaled`, `tile` |

---

### Update a Member's custom Board background

`PUT` `/members/:id/boardBackgrounds/:idBackground`

Update a board background

**Optional Query Parameters:**

| Parameter    | Description                            |
| ------------ | -------------------------------------- |
| `brightness` | One of: `dark`, `light`, `unknown`     |
| `tile`       | Whether the background should be tiled |

---

### Delete a Member's custom Board background

`DELETE` `/members/:id/boardBackgrounds/:idBackground`

Delete a board background

---

### Get a Member's boardStars

`GET` `/members/:id/boardStars`

List a member's board stars

**Path Parameters:**

| Parameter | Description                      |
| --------- | -------------------------------- |
| `id`      | The ID or username of the member |

---

### Create Star for Board

`POST` `/members/:id/boardStars`

Star a new board on behalf of a Member

**Path Parameters:**

| Parameter | Description                      |
| --------- | -------------------------------- |
| `id`      | The ID or username of the member |

**Required Query Parameters:**

| Parameter | Description                                                                    |
| --------- | ------------------------------------------------------------------------------ |
| `idBoard` | The ID of the board to star                                                    |
| `pos`     | The position of the newly starred board. `top`, `bottom`, or a positive float. |

---

### Get a boardStar of Member

`GET` `/members/:id/boardStars/:idStar`

Get a specific boardStar

---

### Update the position of a boardStar of Member

`PUT` `/members/:id/boardStars/:idStar`

Update the position of a starred board

**Optional Query Parameters:**

| Parameter | Description                                                               |
| --------- | ------------------------------------------------------------------------- |
| `pos`     | New position for the starred board. `top`, `bottom`, or a positive float. |

---

### Delete Star for Board

`DELETE` `/members/:id/boardStars/:idStar`

Unstar a board

---

### Get Boards that Member belongs to

`GET` `/members/:id/boards`

Lists the boards that the user is a member of.

**Path Parameters:**

| Parameter | Description                      |
| --------- | -------------------------------- |
| `id`      | The ID or username of the member |

**Optional Query Parameters:**

| Parameter             | Description                                                                                                 |
| --------------------- | ----------------------------------------------------------------------------------------------------------- |
| `filter`              | `all` or a comma-separated list of: `closed`, `members`, `open`, `organization`, `public`, `starred`        |
| `fields`              | `all` or a comma-separated list of board [fields](/cloud/trello/guides/rest-api/object-definitions/)        |
| `lists`               | Which lists to include with the boards. One of: `all`, `closed`, `none`, `open`                             |
| `organization`        | Whether to include the Organization object with the Boards                                                  |
| `organization_fields` | `all` or a comma-separated list of organization [fields](/cloud/trello/guides/rest-api/object-definitions/) |

---

### Get Boards the Member has been invited to

`GET` `/members/:id/boardsInvited`

Get the boards the member has been invited to

**Path Parameters:**

| Parameter | Description                      |
| --------- | -------------------------------- |
| `id`      | The ID or username of the member |

**Optional Query Parameters:**

| Parameter | Description                                                                                          |
| --------- | ---------------------------------------------------------------------------------------------------- |
| `fields`  | `all` or a comma-separated list of board [fields](/cloud/trello/guides/rest-api/object-definitions/) |

---

### Get Cards the Member is on

`GET` `/members/:id/cards`

Gets the cards a member is on

**Path Parameters:**

| Parameter | Description                      |
| --------- | -------------------------------- |
| `id`      | The ID or username of the member |

**Optional Query Parameters:**

| Parameter | Description                                                                  |
| --------- | ---------------------------------------------------------------------------- |
| `filter`  | One of: `all`, `closed`, `complete`, `incomplete`, `none`, `open`, `visible` |

---

### Get a Member's custom Board Backgrounds

`GET` `/members/:id/customBoardBackgrounds`

Get a member's custom board backgrounds

---

### Create a new custom Board Background

`POST` `/members/:id/customBoardBackgrounds`

Upload a new custom board background

**Required Query Parameters:**

| Parameter | Description |
| --------- | ----------- |
| `file`    |             |

---

### Get custom Board Background of Member

`GET` `/members/:id/customBoardBackgrounds/:idBackground`

Get a specific custom board background

---

### Update custom Board Background of Member

`PUT` `/members/:id/customBoardBackgrounds/:idBackground`

Update a specific custom board background

**Optional Query Parameters:**

| Parameter    | Description                        |
| ------------ | ---------------------------------- |
| `brightness` | One of: `dark`, `light`, `unknown` |
| `tile`       | Whether to tile the background     |

---

### Delete custom Board Background of Member

`DELETE` `/members/:id/customBoardBackgrounds/:idBackground`

Delete a specific custom board background

---

### Get a Member's customEmojis

`GET` `/members/:id/customEmoji`

Get a Member's uploaded custom Emojis

---

### Create custom Emoji for Member

`POST` `/members/:id/customEmoji`

Create a new custom Emoji

**Required Query Parameters:**

| Parameter | Description                           |
| --------- | ------------------------------------- |
| `file`    |                                       |
| `name`    | Name for the emoji. 2 - 64 characters |

---

### Get a Member's custom Emoji

`GET` `/members/:id/customEmoji/:idEmoji`

**Path Parameters:**

| Parameter | Description                      |
| --------- | -------------------------------- |
| `id`      | The ID or username of the member |
| `idEmoji` | The ID of the custom emoji       |

**Optional Query Parameters:**

| Parameter | Description                                      |
| --------- | ------------------------------------------------ |
| `fields`  | `all` or a comma-separated list of `name`, `url` |

---

### Get Member's custom Stickers

`GET` `/members/:id/customStickers`

Get a Member's uploaded stickers

---

### Create custom Sticker for Member

`POST` `/members/:id/customStickers`

Upload a new custom sticker

**Required Query Parameters:**

| Parameter | Description |
| --------- | ----------- |
| `file`    |             |

---

### Get a Member's custom Sticker

`GET` `/members/:id/customStickers/:idSticker`

**Optional Query Parameters:**

| Parameter | Description                                        |
| --------- | -------------------------------------------------- |
| `fields`  | `all` or a comma-separated list of `scaled`, `url` |

---

### Delete a Member's custom Sticker

`DELETE` `/members/:id/customStickers/:idSticker`

---

### Get Member's Notifications

`GET` `/members/:id/notifications`

Get a member's notifications

**Path Parameters:**

| Parameter | Description                      |
| --------- | -------------------------------- |
| `id`      | The ID or username of the member |

**Optional Query Parameters:**

| Parameter              | Description                                                                                                 |
| ---------------------- | ----------------------------------------------------------------------------------------------------------- |
| `entities`             |                                                                                                             |
| `display`              |                                                                                                             |
| `filter`               |                                                                                                             |
| `read_filter`          | One of: `all`, `read`, `unread`                                                                             |
| `fields`               | `all` or a comma-separated list of notification [fields](/cloud/trello/guides/rest-api/object-definitions/) |
| `limit`                | Max 1000                                                                                                    |
| `page`                 | Max 100                                                                                                     |
| `before`               | A notification ID                                                                                           |
| `since`                | A notification ID                                                                                           |
| `memberCreator`        |                                                                                                             |
| `memberCreator_fields` | `all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/)       |

---

### Get Member's Organizations

`GET` `/members/:id/organizations`

Get a member's Workspaces

**Path Parameters:**

| Parameter | Description                      |
| --------- | -------------------------------- |
| `id`      | The ID or username of the member |

**Optional Query Parameters:**

| Parameter      | Description                                                                                                 |
| -------------- | ----------------------------------------------------------------------------------------------------------- |
| `filter`       | One of: `all`, `members`, `none`, `public` (Note: `members` filters to only private Workspaces)             |
| `fields`       | `all` or a comma-separated list of organization [fields](/cloud/trello/guides/rest-api/object-definitions/) |
| `paid_account` | Whether or not to include paid account information in the returned workspace object                         |

---

### Get Organizations a Member has been invited to

`GET` `/members/:id/organizationsInvited`

Get a member's Workspaces they have been invited to

**Path Parameters:**

| Parameter | Description                      |
| --------- | -------------------------------- |
| `id`      | The ID or username of the member |

**Optional Query Parameters:**

| Parameter | Description                                                                                                 |
| --------- | ----------------------------------------------------------------------------------------------------------- |
| `fields`  | `all` or a comma-separated list of organization [fields](/cloud/trello/guides/rest-api/object-definitions/) |

---

### Get Member's saved searched

`GET` `/members/:id/savedSearches`

List the saved searches of a Member

---

### Create saved Search for Member

`POST` `/members/:id/savedSearches`

Create a saved search

**Required Query Parameters:**

| Parameter | Description                                                             |
| --------- | ----------------------------------------------------------------------- |
| `name`    | The name for the saved search                                           |
| `query`   | The search query                                                        |
| `pos`     | The position of the saved search. `top`, `bottom`, or a positive float. |

---

### Get a saved search

`GET` `/members/:id/savedSearches/:idSearch`

---

### Update a saved search

`PUT` `/members/:id/savedSearches/:idSearch`

**Optional Query Parameters:**

| Parameter | Description                                                          |
| --------- | -------------------------------------------------------------------- |
| `name`    | The new name for the saved search                                    |
| `query`   | The new search query                                                 |
| `pos`     | New position for saves search. `top`, `bottom`, or a positive float. |

---

### Delete a saved search

`DELETE` `/members/:id/savedSearches/:idSearch`

---

### Get Member's Tokens

`GET` `/members/:id/tokens`

List a members app tokens

**Path Parameters:**

| Parameter | Description                      |
| --------- | -------------------------------- |
| `id`      | The ID or username of the member |

**Optional Query Parameters:**

| Parameter  | Description                 |
| ---------- | --------------------------- |
| `webhooks` | Whether to include webhooks |

---

### Create Avatar for Member

`POST` `/members/:id/avatar`

Create a new avatar for a member

**Path Parameters:**

| Parameter | Description                      |
| --------- | -------------------------------- |
| `id`      | The ID or username of the member |

**Required Query Parameters:**

| Parameter | Description |
| --------- | ----------- |
| `file`    |             |

---

### Dismiss a message for Member

`POST` `/members/:id/oneTimeMessagesDismissed`

Dismiss a message

**Path Parameters:**

| Parameter | Description                      |
| --------- | -------------------------------- |
| `id`      | The ID or username of the member |

**Required Query Parameters:**

| Parameter | Description            |
| --------- | ---------------------- |
| `value`   | The message to dismiss |

---

### Get a Member's notification channel settings

`GET` `/members/:id/notificationsChannelSettings`

Get a member's notification channel settings

---

### Update blocked notification keys of Member on a channel

`PUT` `/members/:id/notificationsChannelSettings`

Update blocked notification keys of Member on a specific channel

---

### Get blocked notification keys of Member on this channel

`GET` `/members/:id/notificationsChannelSettings/:channel`

Get blocked notification keys of Member on a specific channel

---

### Update blocked notification keys of Member on a channel

`PUT` `/members/:id/notificationsChannelSettings/:channel`

Update blocked notification keys of Member on a specific channel

---

### Update blocked notification keys of Member on a channel

`PUT` `/members/:id/notificationsChannelSettings/:channel/:blockedKeys`

Update blocked notification keys of Member on a specific channel

---

## Notifications

### Get a Notification

`GET` `/notifications/:id`

**Path Parameters:**

| Parameter | Description                |
| --------- | -------------------------- |
| `id`      | The ID of the notification |

**Optional Query Parameters:**

| Parameter              | Description                                                                                                 |
| ---------------------- | ----------------------------------------------------------------------------------------------------------- |
| `board`                | Whether to include the board object                                                                         |
| `board_fields`         | `all` or a comma-separated list of board [fields](/cloud/trello/guides/rest-api/object-definitions/)        |
| `card`                 | Whether to include the card object                                                                          |
| `card_fields`          | `all` or a comma-separated list of card [fields](/cloud/trello/guides/rest-api/object-definitions/)         |
| `display`              | Whether to include the display object with the results                                                      |
| `entities`             | Whether to include the entities object with the results                                                     |
| `fields`               | `all` or a comma-separated list of notification [fields](/cloud/trello/guides/rest-api/object-definitions/) |
| `list`                 | Whether to include the list object                                                                          |
| `member`               | Whether to include the member object                                                                        |
| `member_fields`        | `all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/)       |
| `memberCreator`        | Whether to include the member object of the creator                                                         |
| `memberCreator_fields` | `all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/)       |
| `organization`         | Whether to include the organization object                                                                  |
| `organization_fields`  | `all` or a comma-separated list of organization [fields](/cloud/trello/guides/rest-api/object-definitions/) |

---

### Update a Notification's read status

`PUT` `/notifications/:id`

Update the read status of a notification

**Path Parameters:**

| Parameter | Description                |
| --------- | -------------------------- |
| `id`      | The ID of the notification |

**Optional Query Parameters:**

| Parameter | Description                                              |
| --------- | -------------------------------------------------------- |
| `unread`  | Whether the notification should be marked as read or not |

---

### Get a field of a Notification

`GET` `/notifications/:id/:field`

Get a specific property of a notification

**Path Parameters:**

| Parameter | Description                                                               |
| --------- | ------------------------------------------------------------------------- |
| `id`      | The ID of the notification                                                |
| `field`   | A notification [field](/cloud/trello/guides/rest-api/object-definitions/) |

---

### Mark all Notifications as read

`POST` `/notifications/all/read`

Mark all notifications as read

**Optional Query Parameters:**

| Parameter | Description                                                                                                                                                                                                                                                    |
| --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `read`    | Boolean to specify whether to mark as read or unread (defaults to `true`, marking as read)                                                                                                                                                                     |
| `ids`     | A comma-seperated list of IDs. Allows specifying an array of notification IDs to change the read state for. This will become useful as we add grouping of notifications to the UI, with a single button to mark all notifications in the group as read/unread. |

---

### Update Notification's read status

`PUT` `/notifications/:id/unread`

**Path Parameters:**

| Parameter | Description                |
| --------- | -------------------------- |
| `id`      | The ID of the notification |

**Optional Query Parameters:**

| Parameter | Description |
| --------- | ----------- |
| `value`   |             |

---

### Get the Board a Notification is on

`GET` `/notifications/:id/board`

Get the board a notification is associated with

**Path Parameters:**

| Parameter | Description                |
| --------- | -------------------------- |
| `id`      | The ID of the notification |

**Optional Query Parameters:**

| Parameter | Description                                                                                         |
| --------- | --------------------------------------------------------------------------------------------------- |
| `fields`  | `all` or a comma-separated list of board[fields](/cloud/trello/guides/rest-api/object-definitions/) |

---

### Get the Card a Notification is on

`GET` `/notifications/:id/card`

Get the card a notification is associated with

**Path Parameters:**

| Parameter | Description                |
| --------- | -------------------------- |
| `id`      | The ID of the notification |

**Optional Query Parameters:**

| Parameter | Description                                                                                         |
| --------- | --------------------------------------------------------------------------------------------------- |
| `fields`  | `all` or a comma-separated list of card [fields](/cloud/trello/guides/rest-api/object-definitions/) |

---

### Get the List a Notification is on

`GET` `/notifications/:id/list`

Get the list a notification is associated with

**Path Parameters:**

| Parameter | Description                |
| --------- | -------------------------- |
| `id`      | The ID of the notification |

**Optional Query Parameters:**

| Parameter | Description                                                                                         |
| --------- | --------------------------------------------------------------------------------------------------- |
| `fields`  | `all` or a comma-separated list of list [fields](/cloud/trello/guides/rest-api/object-definitions/) |

---

### Get the Member a Notification is about (not the creator)

`GET` `/notifications/:id/member`

Get the member (not the creator) a notification is about

**Path Parameters:**

| Parameter | Description                |
| --------- | -------------------------- |
| `id`      | The ID of the notification |

**Optional Query Parameters:**

| Parameter | Description                                                                                           |
| --------- | ----------------------------------------------------------------------------------------------------- |
| `fields`  | `all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/) |

---

### Get the Member who created the Notification

`GET` `/notifications/:id/memberCreator`

Get the member who created the notification

**Path Parameters:**

| Parameter | Description                |
| --------- | -------------------------- |
| `id`      | The ID of the notification |

**Optional Query Parameters:**

| Parameter | Description                                                                                           |
| --------- | ----------------------------------------------------------------------------------------------------- |
| `fields`  | `all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/) |

---

### Get a Notification's associated Organization

`GET` `/notifications/:id/organization`

Get the organization a notification is associated with

**Path Parameters:**

| Parameter | Description                |
| --------- | -------------------------- |
| `id`      | The ID of the notification |

**Optional Query Parameters:**

| Parameter | Description                                                                                                 |
| --------- | ----------------------------------------------------------------------------------------------------------- |
| `fields`  | `all` or a comma-separated list of organization [fields](/cloud/trello/guides/rest-api/object-definitions/) |

---

## Organizations

### Create a new Organization

`POST` `/organizations`

Create a new Workspace

**Required Query Parameters:**

| Parameter     | Description                              |
| ------------- | ---------------------------------------- |
| `displayName` | The name to display for the Organization |

**Optional Query Parameters:**

| Parameter | Description                                                                                                                                                                                                                                     |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `desc`    | The description for the organizations                                                                                                                                                                                                           |
| `name`    | A string with a length of at least 3. Only lowercase letters, underscores, and numbers are allowed. If the name contains invalid characters, they will be removed. If the name conflicts with an existing name, a new name will be substituted. |
| `website` | A URL starting with `http://` or `https://`                                                                                                                                                                                                     |

---

### Get an Organization

`GET` `/organizations/:id`

---

### Update an Organization

`PUT` `/organizations/:id`

Update an organization

**Optional Query Parameters:**

| Parameter                               | Description                                                                                                  |
| --------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| `name`                                  | A new name for the organization. At least 3 lowercase letters, underscores, and numbers. Must be unique      |
| `displayName`                           | A new displayName for the organization. Must be at least 1 character long and not begin or end with a space. |
| `desc`                                  | A new description for the organization                                                                       |
| `website`                               | A URL starting with `http://`, `https://`, or `null`                                                         |
| `prefs/associatedDomain`                | The Google Apps domain to link this org to.                                                                  |
| `prefs/externalMembersDisabled`         | Whether non-workspace members can be added to boards inside the Workspace                                    |
| `prefs/googleAppsVersion`               | `1` or `2`                                                                                                   |
| `prefs/boardVisibilityRestrict/org`     | Who on the Workspace can make Workspace visible boards. One of `admin`, `none`, `org`                        |
| `prefs/boardVisibilityRestrict/private` | Who can make private boards. One of: `admin`, `none`, `org`                                                  |
| `prefs/boardVisibilityRestrict/public`  | Who on the Workspace can make public boards. One of: `admin`, `none`, `org`                                  |
| `prefs/orgInviteRestrict`               | An email address with optional wildcard characters. (E.g. `subdomain.*.trello.com`)                          |
| `prefs/permissionLevel`                 | Whether the Workspace page is publicly visible. One of: `private`, `public`                                  |

---

### Delete an Organization

`DELETE` `/organizations/:id`

---

### Get field on Organization

`GET` `/organizations/:id/:field`

**Path Parameters:**

| Parameter | Description                                                                |
| --------- | -------------------------------------------------------------------------- |
| `id`      | The ID or name of the organization                                         |
| `field`   | An organization [field](/cloud/trello/guides/rest-api/object-definitions/) |

---

### Get Actions for Organization

`GET` `/organizations/:id/actions`

List the actions on a Workspace

**Path Parameters:**

| Parameter | Description                        |
| --------- | ---------------------------------- |
| `id`      | The ID or name of the organization |

---

### Get Boards in an Organization

`GET` `/organizations/:id/boards`

List the boards in a Workspace

**Path Parameters:**

| Parameter | Description                        |
| --------- | ---------------------------------- |
| `id`      | The ID or name of the organization |

**Optional Query Parameters:**

| Parameter | Description                                                                                          |
| --------- | ---------------------------------------------------------------------------------------------------- |
| `filter`  | `all` or a comma-separated list of: `open`, `closed`, `members`, `organization`, `public`            |
| `fields`  | `all` or a comma-separated list of board [fields](/cloud/trello/guides/rest-api/object-definitions/) |

---

### Retrieve Organization's Exports

`GET` `/organizations/:id/exports`

Retrieve the exports that exist for the given organization

---

### Create Export for Organizations

`POST` `/organizations/:id/exports`

Kick off CSV export for an organization

**Optional Query Parameters:**

| Parameter     | Description                                        |
| ------------- | -------------------------------------------------- |
| `attachments` | Whether the CSV should include attachments or not. |

---

### Get the Members of an Organization

`GET` `/organizations/:id/members`

List the members in a Workspace

**Path Parameters:**

| Parameter | Description                        |
| --------- | ---------------------------------- |
| `id`      | The ID or name of the Organization |

---

### Update an Organization's Members

`PUT` `/organizations/:id/members`

**Path Parameters:**

| Parameter | Description                        |
| --------- | ---------------------------------- |
| `id`      | The ID or name of the organization |

**Required Query Parameters:**

| Parameter  | Description                                                                    |
| ---------- | ------------------------------------------------------------------------------ |
| `email`    | An email address                                                               |
| `fullName` | Name for the member, at least 1 character not beginning or ending with a space |

**Optional Query Parameters:**

| Parameter | Description               |
| --------- | ------------------------- |
| `type`    | One of: `admin`, `normal` |

---

### Get Memberships of an Organization

`GET` `/organizations/:id/memberships`

List the memberships of a Workspace

**Path Parameters:**

| Parameter | Description                        |
| --------- | ---------------------------------- |
| `id`      | The ID or name of the organization |

**Optional Query Parameters:**

| Parameter | Description                                                                          |
| --------- | ------------------------------------------------------------------------------------ |
| `filter`  | `all` or a comma-separated list of: `active`, `admin`, `deactivated`, `me`, `normal` |
| `member`  | Whether to include the Member objects with the Memberships                           |

---

### Get a Membership of an Organization

`GET` `/organizations/:id/memberships/:idMembership`

Get a single Membership for an Organization

**Path Parameters:**

| Parameter      | Description                        |
| -------------- | ---------------------------------- |
| `id`           | The ID or name of the organization |
| `idMembership` | The ID of the membership to load   |

**Optional Query Parameters:**

| Parameter | Description                                          |
| --------- | ---------------------------------------------------- |
| `member`  | Whether to include the Member object in the response |

---

### Get the pluginData Scoped to Organization

`GET` `/organizations/:id/pluginData`

Get organization scoped pluginData on this Workspace

**Path Parameters:**

| Parameter | Description                        |
| --------- | ---------------------------------- |
| `id`      | The ID or name of the organization |

---

### Get Tags of an Organization

`GET` `/organizations/:id/tags`

List the organization's collections

---

### Create a Tag in Organization

`POST` `/organizations/:id/tags`

Create a Tag in an Organization

---

### Update a Member of an Organization

`PUT` `/organizations/:id/members/:idMember`

Add a member to a Workspace or update their member type.

**Path Parameters:**

| Parameter  | Description                                |
| ---------- | ------------------------------------------ |
| `id`       | The ID or name of the organization         |
| `idMember` | The ID or username of the member to update |

**Required Query Parameters:**

| Parameter | Description               |
| --------- | ------------------------- |
| `type`    | One of: `admin`, `normal` |

---

### Remove a Member from an Organization

`DELETE` `/organizations/:id/members/:idMember`

Remove a member from a Workspace

**Path Parameters:**

| Parameter  | Description                                       |
| ---------- | ------------------------------------------------- |
| `id`       | The ID or name of the organization                |
| `idMember` | The ID of the Member to remove from the Workspace |

---

### Deactivate or reactivate a member of an Organization

`PUT` `/organizations/:id/members/:idMember/deactivated`

Deactivate or reactivate a member of a Workspace

**Path Parameters:**

| Parameter  | Description                                |
| ---------- | ------------------------------------------ |
| `id`       | The ID or name of the organization         |
| `idMember` | The ID or username of the member to update |

**Required Query Parameters:**

| Parameter | Description |
| --------- | ----------- |
| `value`   |             |

---

### Update logo for an Organization

`POST` `/organizations/:id/logo`

Set the logo image for a Workspace

**Path Parameters:**

| Parameter | Description                     |
| --------- | ------------------------------- |
| `id`      | The ID or name of the Workspace |

**Optional Query Parameters:**

| Parameter | Description             |
| --------- | ----------------------- |
| `file`    | Image file for the logo |

---

### Delete Logo for Organization

`DELETE` `/organizations/:id/logo`

Delete a the logo from a Workspace

**Path Parameters:**

| Parameter | Description                        |
| --------- | ---------------------------------- |
| `id`      | The ID or name of the organization |

---

### Remove a Member from an Organization and all Organization Boards

`DELETE` `/organizations/:id/members/:idMember/all`

Remove a member from a Workspace and from all Workspace boards

**Path Parameters:**

| Parameter  | Description                                       |
| ---------- | ------------------------------------------------- |
| `id`       | The ID or name of the organization                |
| `idMember` | The ID of the member to remove from the Workspace |

---

### Remove the associated Google Apps domain from a Workspace

`DELETE` `/organizations/:id/prefs/associatedDomain`

**Path Parameters:**

| Parameter | Description                        |
| --------- | ---------------------------------- |
| `id`      | The ID or name of the organization |

---

### Delete the email domain restriction on who can be invited to the Workspace

`DELETE` `/organizations/:id/prefs/orgInviteRestrict`

Remove the email domain restriction on who can be invited to the Workspace

**Path Parameters:**

| Parameter | Description                        |
| --------- | ---------------------------------- |
| `id`      | The ID or name of the organization |

---

### Delete an Organization's Tag

`DELETE` `/organizations/:id/tags/:idTag`

Delete an organization's tag

**Path Parameters:**

| Parameter | Description                        |
| --------- | ---------------------------------- |
| `id`      | The ID or name of the organization |
| `idTag`   | The ID of the tag to delete        |

---

### Get Organizations new billable guests

`GET` `/organizations/:id/newBillableGuests/:idBoard`

Used to check whether the given board has new billable guests on it.

**Path Parameters:**

| Parameter | Description                                           |
| --------- | ----------------------------------------------------- |
| `id`      | The ID or name of the organization                    |
| `idBoard` | The ID of the board to check for new billable guests. |

---

## Plugins

### Get a Plugin

`GET` `/plugins/:id/`

Get plugins

**Path Parameters:**

| Parameter | Description                        |
| --------- | ---------------------------------- |
| `id`      | The ID or name of the organization |

---

### Update a Plugin

`PUT` `/plugins/:id/`

**Path Parameters:**

| Parameter | Description                        |
| --------- | ---------------------------------- |
| `id`      | The ID or name of the organization |

---

### Create a Listing for Plugin

`POST` `/plugins/:idPlugin/listing`

Create a new listing for a given locale for your Power-Up

**Path Parameters:**

| Parameter  | Description                                                      |
| ---------- | ---------------------------------------------------------------- |
| `idPlugin` | The ID of the Power-Up for which you are creating a new listing. |

---

### Get Plugin's Member privacy compliance

`GET` `/plugins/:id/compliance/memberPrivacy`

**Path Parameters:**

| Parameter | Description            |
| --------- | ---------------------- |
| `id`      | The ID of the Power-Up |

---

### Updating Plugin's Listing

`PUT` `/plugins/:idPlugin/listings/:idListing`

Update an existing listing for your Power-Up

**Path Parameters:**

| Parameter   | Description                                                            |
| ----------- | ---------------------------------------------------------------------- |
| `idPlugin`  | The ID of the Power-Up whose listing is being updated.                 |
| `idListing` | The ID of the existing listing for the Power-Up that is being updated. |

---

## Search

### Search Trello

`GET` `/search`

Find what you're looking for in Trello

**Required Query Parameters:**

| Parameter | Description                                             |
| --------- | ------------------------------------------------------- |
| `query`   | The search query with a length of 1 to 16384 characters |

**Optional Query Parameters:**

| Parameter             | Description                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `idBoards`            | `mine` or a comma-separated list of Board IDs                                                                                                                                                                                                                                                                                                                                                                                                       |
| `idOrganizations`     | A comma-separated list of Organization IDs                                                                                                                                                                                                                                                                                                                                                                                                          |
| `idCards`             | A comma-separated list of Card IDs                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `modelTypes`          | What type or types of Trello objects you want to search. all or a comma-separated list of: `actions`, `boards`, `cards`, `members`, `organizations`                                                                                                                                                                                                                                                                                                 |
| `board_fields`        | all or a comma-separated list of: `closed`, `dateLastActivity`, `dateLastView`, `desc`, `descData`, `idOrganization`, `invitations`, `invited`, `labelNames`, `memberships`, `name`, `pinned`, `powerUps`, `prefs`, `shortLink`, `shortUrl`, `starred`, `subscribed`, `url`                                                                                                                                                                         |
| `boards_limit`        | The maximum number of boards returned. Maximum: 1000                                                                                                                                                                                                                                                                                                                                                                                                |
| `board_organization`  | Whether to include the parent organization with board results                                                                                                                                                                                                                                                                                                                                                                                       |
| `card_fields`         | all or a comma-separated list of: `badges`, `checkItemStates`, `closed`, `dateLastActivity`, `desc`, `descData`, `due`, `idAttachmentCover`, `idBoard`, `idChecklists`, `idLabels`, `idList`, `idMembers`, `idMembersVoted`, `idShort`, `labels`, `manualCoverAttachment`, `name`, `pos`, `shortLink`, `shortUrl`, `subscribed`, `url`                                                                                                              |
| `cards_limit`         | The maximum number of cards to return. Maximum: 1000                                                                                                                                                                                                                                                                                                                                                                                                |
| `cards_page`          | The page of results for cards. Maximum: 100                                                                                                                                                                                                                                                                                                                                                                                                         |
| `card_board`          | Whether to include the parent board with card results                                                                                                                                                                                                                                                                                                                                                                                               |
| `card_list`           | Whether to include the parent list with card results                                                                                                                                                                                                                                                                                                                                                                                                |
| `card_members`        | Whether to include member objects with card results                                                                                                                                                                                                                                                                                                                                                                                                 |
| `card_stickers`       | Whether to include sticker objects with card results                                                                                                                                                                                                                                                                                                                                                                                                |
| `card_attachments`    | Whether to include attachment objects with card results. A boolean value (true or false) or cover for only card cover attachments.                                                                                                                                                                                                                                                                                                                  |
| `organization_fields` | all or a comma-separated list of billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url, website                                                                                                                                                                                                                                            |
| `organizations_limit` | The maximum number of Workspaces to return. Maximum 1000                                                                                                                                                                                                                                                                                                                                                                                            |
| `member_fields`       | all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url, username                                                                                                                                                                                                                                                                                             |
| `members_limit`       | The maximum number of members to return. Maximum 1000                                                                                                                                                                                                                                                                                                                                                                                               |
| `partial`             | By default, Trello searches for each word in your query against exactly matching words within Member content. Specifying partial to be true means that we will look for content that starts with any of the words in your query. If you are looking for a Card titled "My Development Status Report", by default you would need to search for "Development". If you have partial enabled, you will be able to search for "dev" but not "velopment". |

---

### Search for Members

`GET` `/search/members/`

Search for Trello members.

**Required Query Parameters:**

| Parameter | Description                             |
| --------- | --------------------------------------- |
| `query`   | Search query 1 to 16384 characters long |

**Optional Query Parameters:**

| Parameter        | Description                                             |
| ---------------- | ------------------------------------------------------- |
| `limit`          | The maximum number of results to return. Maximum of 20. |
| `idBoard`        |                                                         |
| `idOrganization` |                                                         |
| `onlyOrgMembers` |                                                         |

---

## Tokens

### Get a Token

`GET` `/tokens/:token`

Retrieve information about a token.

**Path Parameters:**

| Parameter | Description |
| --------- | ----------- |
| `token`   |             |

**Optional Query Parameters:**

| Parameter  | Description                                                                                              |
| ---------- | -------------------------------------------------------------------------------------------------------- |
| `fields`   | `all` or a comma-separated list of `dateCreated`, `dateExpires`, `idMember`, `identifier`, `permissions` |
| `webhooks` | Determines whether to include webhooks.                                                                  |

---

### Get Token's Member

`GET` `/tokens/:token/member`

Retrieve information about a token's owner by token.

**Path Parameters:**

| Parameter | Description |
| --------- | ----------- |
| `token`   |             |

**Optional Query Parameters:**

| Parameter | Description                                                                                                             |
| --------- | ----------------------------------------------------------------------------------------------------------------------- |
| `fields`  | `all` or a comma-separated list of valid fields for [Member Object](/cloud/trello/guides/rest-api/object-definitions/). |

---

### Get Webhooks for Token

`GET` `/tokens/:token/webhooks`

Retrieve all webhooks created with a Token.

---

### Create Webhooks for Token

`POST` `/tokens/:token/webhooks`

Create a new webhook for a Token.

**Required Query Parameters:**

| Parameter     | Description                                          |
| ------------- | ---------------------------------------------------- |
| `callbackURL` | The URL that the webhook should POST information to. |
| `idModel`     | ID of the object to create a webhook on.             |

**Optional Query Parameters:**

| Parameter     | Description                                                                  |
| ------------- | ---------------------------------------------------------------------------- |
| `description` | A description to be displayed when retrieving information about the webhook. |

---

### Get a Webhook belonging to a Token

`GET` `/tokens/:token/webhooks/:idWebhook`

Retrieve a webhook created with a Token.

---

### Update a Webhook created by Token

`PUT` `/tokens/:token/webhooks/:idWebhook`

**Optional Query Parameters:**

| Parameter     | Description                                                                  |
| ------------- | ---------------------------------------------------------------------------- |
| `description` | A description to be displayed when retrieving information about the webhook. |
| `callbackURL` | The URL that the webhook should `POST` information to.                       |
| `idModel`     | ID of the object that the webhook is on.                                     |

---

### Delete a Webhook created by Token

`DELETE` `/tokens/:token/webhooks/:idWebhook`

Delete a webhook created with given token.

---

### Delete a Token

`DELETE` `/tokens/:token/`

Delete a token.

**Path Parameters:**

| Parameter | Description |
| --------- | ----------- |
| `token`   |             |

---

## Webhooks

### Create a Webhook

`POST` `/webhooks/`

Create a new webhook.

**Required Query Parameters:**

| Parameter     | Description                                                     |
| ------------- | --------------------------------------------------------------- |
| `callbackURL` | A valid URL that is reachable with a `HEAD` and `POST` request. |
| `idModel`     | ID of the model to be monitored                                 |

**Optional Query Parameters:**

| Parameter     | Description                                                           |
| ------------- | --------------------------------------------------------------------- |
| `description` | A string with a length from `0` to `16384`.                           |
| `active`      | Determines whether the webhook is active and sending `POST` requests. |

---

### Get a Webhook

`GET` `/webhooks/:id`

Get a webhook by ID. You must use the token query parameter and pass in the token the webhook was created under, or else you will encounter a 'webhook does not belong to token' error.

---

### Update a Webhook

`PUT` `/webhooks/:id`

Update a webhook by ID.

**Optional Query Parameters:**

| Parameter     | Description                                                           |
| ------------- | --------------------------------------------------------------------- |
| `description` | A string with a length from `0` to `16384`.                           |
| `callbackURL` | A valid URL that is reachable with a `HEAD` and `POST` request.       |
| `idModel`     | ID of the model to be monitored                                       |
| `active`      | Determines whether the webhook is active and sending `POST` requests. |

---

### Delete a Webhook

`DELETE` `/webhooks/:id`

Delete a webhook by ID.

---

### Get a field on a Webhook

`GET` `/webhooks/:id/:field`

**Path Parameters:**

| Parameter | Description                                                                  |
| --------- | ---------------------------------------------------------------------------- |
| `id`      | ID of the webhook.                                                           |
| `field`   | Field to retrieve. One of: `active`, `callbackURL`, `description`, `idModel` |

---

## Environment Variables

| Variable   | Default Value    | Description                                              |
| ---------- | ---------------- | -------------------------------------------------------- |
| `protocol` | `https`          | The HTTP Protocol that should be used for this REST API. |
| `host`     | `api.trello.com` | The HTTP host that should be used for this REST API.     |
| `basePath` | `1/`             | The path, after the host, of the base of the REST API.   |

---

_Generated from Trello REST API Postman Collection (v2.0.0)_
