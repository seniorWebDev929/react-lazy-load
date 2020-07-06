import React from 'react';
import { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import Loading from './loading';
import './index.css';

// import Artists from './Artists';

const Artists = lazy(() => import('./Artists'))
const Performers = lazy(() => import('./performers'))
class App extends React.Component {
    render(){
        return(
            <div className="App">
                <Suspense fallback={<Loading />}>
                    <Artists />
                    <Performers />
                </Suspense>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
