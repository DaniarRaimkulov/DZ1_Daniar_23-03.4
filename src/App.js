import './App.css';
import Header from './components/Header/Header';
import Wrapper from './components/wrapper/Wrapper';
import Footer from './components/Footer/Footer';
import Buttons from './components/button/button';
import Text from './components/Text/Text';
import React from 'react';

function App() {
    const peoples = [
        'Daniar', 'Raimkulov', 'Goon', 'HXH'
    ];
    const menuList = ['Home', 'Sport', 'News', 'Real', 'Future'];

    return (
        <div>
            <Header
                navbar={menuList.map((e) => (
                    <li key={e}>
                        <a href="#" className="menu_link">
                            {e}
                        </a>
                    </li>
                ))}
            />

            <Text txt="my site" about="geektech"/>

            <Wrapper
                card={peoples.map((e) => (
                    <div className="card" key={e}>
                        <h2 className="card_h2">{e}</h2>
                        <p className="card_p">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse molestias nam quia quo
                            veniam.
                            Aliquid aperiam assumenda culpa deleniti, distinctio doloribus dolorum inventore ipsam
                            labore maiores
                            minus modi non obcaecati officia officiis quasi, quia quod reiciendis rem, temporibus totam?
                        </p>
                    </div>
                ))}
            />

            <Buttons
                text={peoples.map((e) => (
                    <button
                        className="btns"
                        key={e}
                        onClick={() => {
                            console.log(`${e} this click`);
                        }}
                    >
                        {e}
                    </button>
                ))}
            />

            <Footer inst="nortligh"/>
        </div>
    );
}

export default App;
