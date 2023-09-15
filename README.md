# Course Registration

Welcome to the most popular online web development course in Bangladesh.

## Course Feature.

- You can buy our course at cheapest price and you will be able to enjoy lifetime support from our team members.
- From this course you could learn C Programming, Algorithms, Data structure, MYSql and also other Programming language.
- Our courses will teach you problem solving, through which you can develop yourself as a more efficient developer.

## How I managed the state that I used in my project.

In my assignment project, I managed the React state using several state variables to keep track of various aspects of the application. Here is a breakdown of how I utilized these state variables:

1. `courses` and `setCourses`: I used the `courses` state along with `setCourses` to store and manage the course data. This state was primarily utilized in the `courses.jsx` file, where I loaded and displayed the course information from a JSON file. By using this state, I could dynamically render and update the course list based on the data.

2. `blogs` and `setBlogs`: The `blogs` state, along with `setBlogs`, played a crucial role in managing the selected courses. I implemented a function called `handleSelectButton`, which was invoked when users clicked on a course to select it. This function used the `setBlogs` function to update the list of selected courses, ensuring that the selected courses were properly tracked and displayed in the UI.

3. `hour` and `setHour`: To handle the credit hours associated with each selected course, I used the `hour` state and `setHour` function. When a user selected a course, the corresponding credit hours were stored in this state. This information was then utilized to calculate and display the total credit hours in the `cart.jsx` file.

4. `remaining` and `setRemaining`: The `remaining` state, managed by `setRemaining`, was used to keep track of the remaining credit hours available to the user. Since there was a limit of 20 credit hours, I used this state to update and display the remaining hours as users selected and deselected courses. The calculation of remaining hours was based on the `hour` state.

5. `price` and `setPrice`: Lastly, I employed the `price` state and `setPrice` function to store and display the total price of the selected courses. As courses were selected or deselected, the price was dynamically updated, and users could see the total cost of their selected courses in the `cart.jsx` file.

By effectively utilizing these React state variables, I ensured that the application could handle course selection, credit hour tracking, remaining hours calculation, and pricing display seamlessly, providing a smooth user experience.

- I used Google Translate for this answer.
