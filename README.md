## Considerations

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

## Tests

