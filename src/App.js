import React, { Component } from "react";
import Header from "./header";
import Footer from "./footer";
import MyComponent from "./consumer";


class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <MyComponent />
                <Footer />
            </div>
            
        )
    }
}

export default App;