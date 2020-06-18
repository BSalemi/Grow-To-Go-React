![Grow To Go logo](https://fontmeme.com/permalink/190910/cd6f2ab7e2bb65d7267bc46d5894d410.png)

# Grow To Go

Flatiron School React & Redux Project - Grow To Go, a React / Redux application (with a Rails API backend), is a mock ecommerce site that allows users to find the perfect houseplant that fits their lifestyle, needs, and capabilities. 

https://grow-to-go.herokuapp.com/

### Login Credentials

Email: test123@gmail.com

Username: test123 

## Installation

For local usage of the application, please follow the below instructions.

After cloning the repo, install the dependencies by executing the below command in your terminal:

$ npm install

Launch the application using the below command in your terminal:

$ npm start

Please note that you will also have to follow the installation instructions for the backend API application at: 

https://github.com/BSalemi/Grow-to-Go-backend

## Usage

Upon launching the application, the user can navigate to localhost:PortNumber/ to arrive at the application login page prompting the user sign-up or log-in.

Following a successful user sign-up or log-in, the user will arrive at Grow to Go's homepage. Once the homepage is rendered, a fetch request is made to the Rails backend to collect and render all of the houseplants found in the seed file. 

[![Grow To Go Screen Grab](https://i.imgur.com/z5gl848.png)](https://vimeo.com/366899721)

From here, the user has a number of different options to find the perfect plant for their situation. 

   * Sort for plants by:
    	- Price
    	- Size
    	- Experience Level
    	- Light Requirements 
      - Pet Friendliness/Non-toxic to cats and dogs
      
   * Use the search feature to find plants directly by name. 
   * Click on a plant to be brought to that particular plant's show page which includes more information about that plant.
   * Leave a review for each particular plant.
   * Add a desired plant to their shopping cart by clicking the associated Add to Cart button.
   * Hover over the Shopping Cart icon to display the contenets of the user's cart.
   * Remove a plant from their cart by clicking on the Trash Bin icon.
   * Increment or decrement a plant in their cart by clicking the + or trash can icons.
   * Complete their transaction by clicking the Checkout button.
   
## Contribution 
   
Bug reports and pull requests are welcome on GitHub at https://github.com/BSalemi/Grow-To-Go-React. This project is intended to be a safe,   welcoming space for collaboration. Contributors are expected to adhere to the [Contributor Covenant](https://www.contributor-covenant.org/) code of conduct.

## License 

The system is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).
