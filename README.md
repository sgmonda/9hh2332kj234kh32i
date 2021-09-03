This is my proposed solution, running serverless in Vercel:

- [https://9hh2332kj234kh32i.vercel.app](https://9hh2332kj234kh32i.vercel.app)

The following tiny document explains a bit how I've implemented it and some decissions I've made.

## General considerations

- **Ant Design**
  I never used [Ant-d](https://ant.design/) before, but keeping in mind the job position listed it as a technology used by the company, I've taken advantage of the opportunity to use it as UI components library. It means I've needed to make some adaptations by mean of SASS, as provided screenshots didn't match the Ant-d design in some aspects. It also means used icons not always match exactly provided ones, but I've tried to find similar ones.
- **SASS and CSS Modules**
  I've used [CSS modules](https://github.com/css-modules/css-modules) as much as possible for any UI customization to achieve the proposed design. This way customizing a component does not affect others. I always prefer to work with SASS instead of CSS, as code is a bit simpler thanks to classes nesting and not having to write brackets and semicolons.
- **Next.js**
  I love using [Next.js framework](https://nextjs.org) to build any React app, as it offers SSR, path-based routing (for pages and API endpoints) and other cool features by default. So I've used this for this tiny project. This way I've been able to focus on reproducing the proposed UI and offering a cool UX.
- **Pagination**
  Proposed UI does not include any viewable pagination, so I've decided to implement an infinite scroll approach, where "pages" are requested as user scroll down. Once the last item of the list is viewable, next "page" is requested. This way the UI is fast from the begining and network is used only as needed. To support pagination, I've retrieved and cached the list in a custom API endpoint, as provided one does not seem to support pagination (I've checked headers in the HTTP responses but nothing related to paginationn is said). Note I've implemented an artificial delay so a slow connection is "simulated". This way we can appreciate the infinite scroll effect when loading data.
- **Authentication**
  You'll see there is a custom API endpoint for authentication. Retrieved user is stored in redux (for the current session) and in localStorage so you can reload the page without losing the session. Any request to the API sends authentication token (in a very basic way) so non-authenticated users cannot retrieve data. Obviously, a more elegant way is recommended in production, but I find this approach enough for this.
- **User list/modal**
  Given the simplicity of user schema, I'm returning the whole user data when listing. It wouldn't be recommended in production if the user schema contains more data not needed for listing but required by the user modal. The proper approach would be to have another endpoint for fetching the whole user.
- **Stacked modals**
  For simplicity, I'm using Redux to show/hide modals in a simple way that limits open modals to one (login and/or user modals). This means modals could not be stacked one above others. Note there could be a better approach in production if we consider accessibility and [w3 aria best practices](https://www.w3.org/TR/wai-aria-practices-1.1/). Again, for this example I've considered it is enough this way.
  
## Redux store

Following the latest [`redux-toolkit`](https://redux-toolkit.js.org) recommendations, I've designed 3 reducers:

- `auth`, to store the session-related data
- `navigation`, to store info related to the navigation bar (if it is collapsed or not, for instance)
- `modal`, to store the state related with modals, like which one is open or the data to be shown
- `users`, to store user list fetched items according to pagination.

## Components

I like keeping components as small and reusable as possible. Focused on this, I've included the following components:

For layout:

- `<Layout />`
- `<Navbar />`
- `<Header />`

Other:

- `<List />`: generic component for infinite scroll lists
- `<UserListItem />`: list item view to be used with generic `<List />`
- `<ModalLogin />`: modal for login (I've decided to use this approach instead of creating another page, as sometimes parts of the app don't have to be hidden for non-authenticated users)
- `<ModalUser />`: modal to show user info, as shown in the UI designs.

## Testing

I've implemented simple e2e tests using Cypress, to check user interaction works as expected. To execute them, just run the following:

On terminal 1:

``` sh
$ npm run dev
```
On terminal 2/2, run tests in one of the two available options:

- Headless
- Interactive

#### Headless mode

This will run Cypress tests and show results into a terminal:

``` sh
$ npm test
```

![](https://user-images.githubusercontent.com/675812/132038650-716f517f-6ac3-4453-90a7-57f3d9860919.png)

#### Interactive mode

This will open Cypress tests inside a browser:

``` sh
$ npm run test:show
```

![navigation spec ts](https://user-images.githubusercontent.com/675812/132039470-e1136307-a191-4887-95b1-8f02f8021d14.gif)
![pagination spec ts](https://user-images.githubusercontent.com/675812/132039482-db010551-07c6-48a4-a33f-01f5cd2d1dbc.gif)
![authentication spec ts](https://user-images.githubusercontent.com/675812/132039451-95faaff9-4011-443c-90d8-6fecea5ebf7c.gif)
