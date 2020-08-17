# Microservices Example

This is a quick example on how to work microservices, using Koa and Vue.js.

Each folder within the project acts as an independent microservice that could be hosted independently, say, as separate Lambda functions in AWS.

- **Catalog**: Server that hosts a (mocked-up) database of products.
- **Payment**: Server that validates a fictional credit card to enable payments.
- **Image bucket**: Server that hosts images for the catalog.
- **Storefront (web server)**: Frontend Vue.js application that acts as the fictional marketplace, and that communicates with all the microservices to display a list of products, let users add them to a cart and simulate a purchase.

Ideally a central microservice hub could be created, that would just be a directory of hosts where each microservice could ask where to find eachother. This would centralize such infomacion instead of having to rely on having copies of this directory on every microservice.

Of course, with this being just an example, many actual security measures that are a must on this sort of application are ignored. I also chose to avoid having an actual database just for the sake of simplicity (only using lowDb to quickly load the catalog from a JSON file), but obviously it would be needed in a real-life application.

### Potential TODO list (for fun)
- Create a checkout microservice that validates the integrity of the cart before and during payment.
- Create an auth microservice that lets users sign up and login to keep track of their carts and orders.
- Add a persistent database.
