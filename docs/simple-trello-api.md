# Simple Trello API Collection Guide

This guide documents the local [Simple Trello API](collection/a5DFCDa197bFBd7cDB4Af9A3) collection based on the request files in `postman/collections/Simple Trello API`.

## What is in this collection

The collection is a flat set of HTTP requests with no subfolders. It covers a simple Trello workflow:

1. Verify your Trello account access
2. View boards
3. Create a board
4. Create and manage lists on a board
5. Create and manage cards in a list
6. Move a card to another list
7. Clean up by deleting cards or boards

## Prerequisites

Before sending any request in Postman, make sure you have:

- A Trello account
- A Trello API key
- A Trello token
- A board ID for requests that work with an existing board
- Permission to create, update, and delete Trello resources in your account

The collection is configured to call the Trello REST API base URL:

- `https://api.trello.com/`

## Collection variables used

The collection definition includes these variables:

- `address` → base URL for Trello API
- `trellokey` → Trello API key
- `trellotoken` → Trello API token
- `idBoard` → board ID used by board/list/card requests

Important notes:

- Most requests authenticate by passing `key` and `token` as query parameters.
- Keep those values variable-based in Postman, using placeholders such as `{{trellokey}}` and `{{trellotoken}}` rather than literal credential strings in saved requests or docs.
- If you need to supply your own credentials locally, set them as variables in Postman instead of editing request URLs or documentation with raw values.

## Environment variables you should have ready

The active environment is **darrehanrasool**. Its file could not be read from the filesystem because environment files are protected from tool access, so this guide only documents variables confirmed from the collection files.

To use the collection smoothly, make sure your active environment or collection variables provide at least:

- `address`
- `trellokey`
- `trellotoken`
- `idBoard`

You may also want to save additional IDs while testing, such as:

- `listId`
- `doneListId`
- `cardId`

These extra variables are not defined in the collection files, but they make repeated testing easier.

## Authentication pattern

Authentication is handled with Trello query parameters on nearly every request:

- `key={{trellokey}}`
- `token={{trellotoken}}`

One request, **Trello API Verify member login**, also includes API key auth metadata, but the actual working auth values are still passed in the URL/query params.

## Scripts in the collection

No collection-level or request-level pre-request scripts or test scripts were found in the local collection files.

That means:

- No IDs are captured automatically after requests run
- No response assertions are built in
- You will need to copy IDs manually from responses if you want to use them in later requests

## Recommended request order

Because the collection does not save dynamic values automatically, follow this order carefully and copy IDs from responses as needed.

### 1. Verify member login

Request: **Trello API Verify member login**

- Method: `GET`
- Endpoint: `/1/members/me/`
- Purpose: confirms that your Trello key and token are valid

Run this first. If it succeeds, your credentials are working.

### 2. Get all boards

Request: **Trello API Get all boards**

- Method: `GET`
- Endpoint: `/1/members/me/boards`
- Purpose: lists boards available to the authenticated member

Use this if you already have boards and want to pick an existing board ID.

### 3. Create a board

Request: **Trello API  Create board**

- Method: `POST`
- Endpoint: `/1/boards/`
- Query params include `name=Trello Rest API Test`
- Purpose: creates a new board

After running it:

- Copy the returned board ID
- Update `idBoard` before using list and card requests tied to that board

### 4. Get a single board

Request: **Trello API Get single board**

- Method: `GET`
- Endpoint: `/1/boards/:id`
- Purpose: fetches one board by ID

Use this to verify the board you want to work with.

### 5. Create a list

Request: **Trello API Create a list**

- Method: `POST`
- Endpoint: `/1/lists`
- Query params include:
  - `name=done`
  - `idBoard={{idBoard}}`
- Purpose: creates a list on the selected board

After running it:

- Copy the new list ID from the response
- You will need that ID for later list and card requests

### 6. Get all lists for a board

Request: **Trello API Get all lists**

- Method: `GET`
- Endpoint: `/1/boards/{{idBoard}}/lists`
- Purpose: returns every list on the current board

Use this to confirm the IDs of your lists.

### 7. Get a list

Request: **Trello API Get a list**

- Method: `GET`
- Endpoint: `/1/lists/:id`
- Purpose: fetches details for one list

Before running it, replace the request path variable `id` with the list ID you want.

### 8. Update a list

Request: **Trello API Update a list**

- Method: `PUT`
- Endpoint: `/1/lists/:id`
- Query params include `name=todo`
- Purpose: renames a list

Before running it:

- Set the path variable `id` to your target list ID

### 9. Get the board a list belongs to

Request: **Trello API Get the Board a List is on**

- Method: `GET`
- Endpoint: `/1/lists/:id/board`
- Purpose: retrieves the parent board for a list

Before running it, set the list ID in the path variable.

### 10. Create a card

Request: **Trello API Create a card**

- Method: `POST`
- Endpoint: `/1/cards`
- Query params include:
  - `idList=69d61e39ecbe398f4292349e`
  - `name=Fourth Task`
- Purpose: creates a card in a list

Important:

- This request currently uses a hard-coded `idList` value in the file
- Replace it with your own target list ID before sending

After running it:

- Copy the returned card ID for the next card operations

### 11. Get all cards in a list

Request: **Trello API Get a all cards**

- Method: `GET`
- Endpoint: `/1/lists/:listId/cards`
- Purpose: lists cards in a specific list

Before running it, replace `listId` with your actual list ID.

### 12. Get a card

Request: **Trello API Get a Card**

- Method: `GET`
- Endpoint: `/1/cards/:id`
- Purpose: fetches one card by ID

Before running it, replace the path variable `id` with your card ID.

### 13. Update a card

Request: **Trello API Update a card**

- Method: `PUT`
- Endpoint: `/1/cards/:id`
- Query params include:
  - `name=Fourth Task update`
  - `idBoard={{idBoard}}`
- Purpose: updates the selected card

Before running it:

- Replace the path variable `id` with your card ID
- Confirm `idBoard` matches the board that contains the card

### 14. Move card to done list

Request: **Trello API Move card to done list**

- Method: `PUT`
- Endpoint: `/1/cards/:id`
- Query params include:
  - `name=Fourth Task update`
  - `idList=69d61e4799234a5e7f85451a`
- Purpose: moves a card to another list

Important:

- This request currently uses a hard-coded destination list ID
- Replace `idList` with the ID of your destination list, such as your done list
- Replace the path variable `id` with your card ID

### 15. Delete a card

Request: **Trello API Delete a card**

- Method: `DELETE`
- Endpoint: `/1/cards/:cardId`
- Purpose: deletes a card

Before running it, replace `cardId` with the card you want to remove.

### 16. Delete a board

Request: **Trello API Delete a board**

- Method: `DELETE`
- Endpoint: `/1/boards/:id`
- Purpose: deletes a board

Run this last if you created a temporary board for testing.

## Request inventory

Here is the full set of requests found in the collection:

1. `GET /1/members/me/` — Verify member login
2. `GET /1/members/me/boards` — Get all boards
3. `GET /1/boards/:id` — Get single board
4. `POST /1/boards/` — Create board
5. `DELETE /1/boards/:id` — Delete board
6. `POST /1/lists` — Create a list
7. `GET /1/boards/{{idBoard}}/lists` — Get all lists
8. `GET /1/lists/:id` — Get a list
9. `PUT /1/lists/:id` — Update a list
10. `GET /1/lists/:id/board` — Get the board a list is on
11. `POST /1/cards` — Create a card
12. `GET /1/lists/:listId/cards` — Get all cards in a list
13. `GET /1/cards/:id` — Get a card
14. `PUT /1/cards/:id` — Update a card
15. `PUT /1/cards/:id` — Move card to done list
16. `DELETE /1/cards/:cardId` — Delete a card

## Beginner tips for using this collection in Postman

- Start with the login verification request to confirm auth works.
- Use one temporary board for testing so cleanup is easy.
- After every create request, copy the returned ID into variables or directly into the next request.
- Review request path variables before sending because several requests contain fixed example IDs from the local files.
- Be careful with delete requests because they permanently remove Trello resources.

## Local source used

This documentation was created from the actual files in:

- `postman/collections/Simple Trello API`
- `postman/collections/Simple Trello API/.resources/definition.yaml`

Documentation file created at:

- `docs/simple-trello-api.md`
