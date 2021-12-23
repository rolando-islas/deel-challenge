1. What is the difference between Component and PureComponent? Give an example where it might break my app.
    The difference between them is that Component doesn't implement shouldComponentUpdate(), and a PureComponent does. PureComponent only rerenders if its own props or state change.

2. Context + ShouldComponentUpdate might be dangerous. Can think of why is that?
    There might be issues in which some components need to rerender after updating the context values and they will not rerender because of the implementation of ShouldComponentUpdate.

3. Describe 3 ways to pass information from a component to its PARENT.
    * You can use React Context to share information between a tree of react components.
    * You can use a state management library like redux.
    * You can define a function on the parent component to handle the data and send this function as a prop to the child component.

4. Give 2 ways to prevent components from re-rendering.
    * By implementing shouldComponentUpdate() on a Component.
    * By using a PureComponent instead of a Component.

5. What is a fragment and why do we need it? Give an example where it might break my app.
    A fragment is used when you need to return multiple elements in a component instead of just one.

6. Give 3 examples of the HOC pattern.
    * When you need to reuse logic on your components. You create a HOC that takes the component and returns a new component with the logic.
    * You can use this with Context. You can wrap your component on a HOC that contains all the logic for using a specific context.
    * It can also be used for styling components with reusable elements and styles. You can create a HOC that returns a container with the component as a children.

7. What's the difference in handling exceptions in promises, callbacks and async...await.
    When you use promises, you have to chain methods for executing code after the promise has resolved. For handling exceptions, you need to chaing the catch method:
    ```js
    function getAsyncData() {
      api.get().then(() => {}).catch(/* HANDLE ERROR */)
    }
    ```

    When you use async...await, you can use try..catch
    ```js
    async function getAsyncData() {
      try {
        await api.get()
      } catch (e) {
        // HANDLE ERROR
      }
    }
    ```

8. How many arguments does setState take and why is it async.
    It takes 2 arguments: the new state values in an object, and a callback function that is called after the state is updated.
    It is async because it handles the updates in batches. This is to avoid rerendering a component multiple times.

9. List the steps needed to migrate a Class to Function Component.
    1. Create a function that will replace the Class component.
    2. Add the params to the function for receiving props. You can use object destructuring on the function params or just receive one param: ```props```.
    3. Change the state of the class to individual values using useState() hook.
    4. Change the lifecycle methods to use react hooks. For example:
      ```jsx
        function myComponent() {
          // Equivalent of componentDidMount()
          useEffect(() => {
          }, []);
        }
      ```
    5. Add the class methods to the new function. You can set the methods on constants for the function:
      ```js
        // Class
        classMethod() {
        }

        // Function
        const classMethod = () => {
        }
      ```
    6. Since this is not a class anymore, you should remove all the references to ```this``` when it's not needed. For example: ```this.state```, ```this.classMethod()```. Now all the state values are defined in individual values,  methods can be called only by their names.
    7. The template of the component is the value returned by the function. Copy the template returned by the render() method on the class to the return value of the new function component.

10. List a few ways styles can be used with components.
    * You can use inline styles:
      ```jsx
        <Component style={{ color: red }} />
      ```
    * You can use classNames defined in css
      ```jsx
        <Component className='component-style' />
      ```
    * There are also solutions for using css-in-js, like [Styled Components](https://styled-components.com/)

11. How to render and HTML string coming from the server.
    You set the dangerouslySetInnerHTML attribute on an element:
      ```jsx
        <div dangerouslySetInnerHTML={{ __html: htmlFromServer }} />
      ```
