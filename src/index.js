import number from "./number";
import counter from "./counter";

new number();
new counter()

if (module.hot) {
    module.hot.accept('./number', () => {
        document.body.removeChild(document.getElementById('div'));
        new number();
    })
}
