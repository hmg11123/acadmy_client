import React from 'react';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import Maincomponent1 from '../components/MainComponent1';
import Maincomponent2 from '../components/MainComponent2';

class ACSC00 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentTab: 1,
        };
    }
    render() {
        const { currentTab } = this.state;
        return (
            <div className="ACSC00">
                <div className="ACSC00__bg">
                    <div className="ACSC00__bg__desc">
                        <h2>맞춤형 교육 시스템</h2>
                        <p>전국 최초 학생형 맞춤 교육</p>
                        <p>입문부터 개발자까지 한방에</p>
                    </div>
                    <div className="ACSC00__bg__arrow">
                        <KeyboardArrowDownIcon />
                    </div>
                </div>
                <div className="ACSC00_contents">
                    <button
                        className={currentTab === 1 ? 'ACSC00_contents_btn active' : 'ACSC00_conients_btn'}
                        onClick={() => this._changeTabHandler(1)}
                    >
                        GALLERY
                    </button>

                    <button
                        className={currentTab === 2 ? 'ACSC00_contents_btn active' : 'ACSC00_conients_btn'}
                        onClick={() => this._changeTabHandler(2)}
                    >
                        GALLERY
                    </button>
                </div>
                <div className="ACSC00_desc">
                    {currentTab === 1 ? <Maincomponent1 /> : null}
                    {currentTab === 2 ? <Maincomponent2 /> : null}
                </div>
            </div>
        );
    }

    _changeTabHandler = (tab) => {
        this.setState({
            currentTab: tab,
        });
    };
}

export default ACSC00;
