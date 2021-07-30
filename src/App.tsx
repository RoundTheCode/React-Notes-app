import NoteListingComponent from './components/note-listing-component';

function App() {
  return (
    <div className="container">
    <div className="row">
        <div className="container-fluid">
            <div className="row note-container">
             <NoteListingComponent Notes={[]}></NoteListingComponent>
            </div>
        </div>
      </div>
    </div>  
    );
}

export default App;
