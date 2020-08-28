import React from "react";

// Import functional component
import { Header } from "./assets/components/Header/Header";

// Import class components (Pages)
import { PlaylistCreationPage } from "./assets/components/PlaylistCreationPage/PlaylistCreationPage";
import { PlaylistManagerPage } from "./assets/components/PlaylistManagerPage/PlaylistManagerPage";

// Import current component styles
import { AppContainer } from "./AppStyles";

class App extends React.Component {
  state = {
    currentPage: "playlistCreationPage",
  };

  // Change page function (set current page in state)
  handleChangePage = (currentPage) => {
    this.setState({ currentPage: currentPage });
  };

  render() {
    // Render pages function (chooses which page to render)
    const renderCurrentPage = () => {
      if (this.state.currentPage === "playlistCreationPage") {
        return <PlaylistCreationPage />;
      } else if (this.state.currentPage === "playlistManagerPage") {
        return <PlaylistManagerPage />;
      }
    };

    return (
      <AppContainer>
        <Header changePage={this.handleChangePage} />
        {renderCurrentPage()}
      </AppContainer>
    );
  }
}

export default App;
