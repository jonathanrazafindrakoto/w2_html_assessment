# HTML Lab Assessment with Bootstrap

### Objective:
This assessment will test your understanding of HTML structure, the use of Bootstrap for layout, and your ability to create a functional, responsive webpage. You’ll be building a webpage with various elements and applying some Bootstrap components for styling.

### Instructions:
⭐️ Fork and clone this project
⭐️ Do not modify the provided code for the DOCTYPE, meta tags, or Bootstrap.<br>
⭐️ Focus on completing the tasks outlined below.<br>
⭐️ Ensure your webpage is responsive and displays correctly on different screen sizes.<br>
⭐️ Submit your HTML code once all tasks are completed.

## 📝 Task 1: Create the HTML Structure
**Requirements**:<br>
You’ll start by working within the provided HTML skeleton.
- Create a navigation bar using Bootstrap’s navbar component.
- Include at least three links: **Home, About, and Contact**.
- Ensure the navbar collapses on mobile for responsiveness..

## 📝 Task 2: Content Layout using Bootstrap Grid
**Requirements**:<br>
- Create a section using Bootstrap's grid system with two columns:<br>
    - **First column**: Add a `<h2>` heading and two paragraphs` (<p>)`.
    - **Second column**: Add an unordered list (`<ul>`) with at least five items.
- Wrap the content inside a `container` and a `row` for proper structure.
- Include at least 1 image to each column. Each image must:<br>
    - Uses the `img-fluid` class for responsiveness.
    - Has a descriptive `alt` attribute for accessibility.
    - Is centered inside a Bootstrap card, container, or column.

💡Hints:<br>
- Use `col-md-6` to make columns responsive.
- Wrap everything inside a `container` to center content on larger screens.
- Use Bootstrap’s `img-fluid` class to make images responsive.

## 📝 Task 3: Form with Bootstrap Styling
**Requirements**:<br>
Create a contact form with the following fields:<br>
- Name (Text input)
- Email (Email input)
- Message (Text area)
- Submit button (use` btn btn-primary` for styling)
- Use Bootstrap `form` classes to style the form elements.
- Ensure the form is responsive and fields stack vertically on smaller screens.

💡Hints:<br>
- Use `form-group` for grouping label and input fields.
- Use `form-control` class for text inputs and text areas.
- Use `btn` classes for the button styling.


## 📝 Task 4: Table Layout
**Requirements**:<br>
Create a table to display some sample data. The table should have:<br>
- A caption / Title.
- A header row with the following columns: Name, Age, Occupation.
- At least 3 rows of data in the body.
- Style the table using Bootstrap’s table and table-striped classes for a clean look.

💡Hints: Use `<thead>, <tbody>,` and `<tr>` tags for structure.

## 📝 Task 5: Bootstrap Cards for Content Display
**Requirements**:<br>
Create a card component to display an item. Each card should include:
- A card title (e.g., "Product 1").
- A card text with a description of the item.
- A card button that links to a product page or another section `(use href="#")`.
- Create at least 3 cards arranged side-by-side in a responsive grid.

💡Hints: Use `col-md-4` for a 3-column layout on medium screens.


## 📝 Task 6: Footer with Links 
**Requirements**:<br>
Create a footer at the bottom of the page that includes:<br>
- At least 3 external links `(e.g., to external websites)`.
- A short information.

<br>

## 🎁 Bonus Task 7 (Optional): Box animation
Create a simple animation using JavaScript, HTML, and CSS. This task will help you understand how to manipulate the DOM and apply smooth animations.
- I’ve provided the necessary styles and script for this animation, so please do not modify them. You’ll just need to focus on integrating the provided code into your webpage.
- Add the following HTML block before your footer section:<br>

```
    <div class="wrapper">
        <h2>Interactive Box Animation</h2>
        <button onclick="startAnimation('horizontal')">Move Horizontally</button>
        <button onclick="startAnimation('vertical')">Move Vertically</button>
        <button onclick="stopAnimation()">Stop</button>
        
        <br><br>
        <label>Speed:</label>
        <input type="range" id="speedControl" min="1" max="10" value="5">
        
        <div class="container">
            <div class="box">
                <!-- Add your preferred text here -->
                Hello, I'm an animated box!
            </div>
        </div>
    </div>

```
- Inside the box `(<div class="box">)`, add your preferred text content. It could be anything like a greeting, quote, or message you want to display as the box moves.
- Ensure the animation:<br> 
    - Moves the box horizontally or vertically depending on the button clicked.
    - Changes the speed of movement using the slider.
    - Changes the box's color every time it bounces.


    <br>
## Submission:
- Ensure your HTML code is well-structured and follows best practices.
- Submit the final HTML file (and any additional resources such as images or media files) as instructed.


## Grading Criteria:
**HTML Structure:** Proper use of HTML tags and semantic structure.<br>
**Bootstrap Usage**: Correct application of Bootstrap components `(navbar, grid, forms, tables, etc.).`<br>
**Responsiveness**: The page should be responsive on different screen sizes.<br>
**Accessibility**: Proper use of alt attributes for images and labels for form inputs.<br>
**Design**: The page should be visually appealing and easy to navigate.
