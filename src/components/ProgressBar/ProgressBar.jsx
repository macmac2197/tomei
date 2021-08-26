import React from 'react';
import Step1 from '../../assets/Wizard-Step1.png';
import Step2 from '../../assets/Wizard-Step2.png';
import Step3 from '../../assets/Wizard-Step3.png';
import Step4 from '../../assets/Wizard-Step4.png';
import Step5 from '../../assets/Wizard-Step5.png';
import PrgressBar from '../../assets/Wizard-HorizontalBar.png';
import './index.css';

const ProgressBar = () => {
    return (
        <>
            <div className="progress-bar">
                <ul>
                    <li>
                        <img src={Step1} alt="Step 1"/>
                        <div className="progress-steps active-steps">
                            <strong>STEP 1</strong>
                            <br/><br/>
                            CREATE YOUR ACCOUNT PASSWORD
                        </div>
                    </li>
                    <li>
                        <img src={PrgressBar} alt="PrgressBar" className="image-bar"/>
                    </li>
                    <li>
                        <img src={Step2} alt="Step 2"/>
                        <div className="progress-steps">
                            <strong>STEP 2</strong>
                            <br/><br/>
                            PERSONAL INFORMATION
                        </div>
                    </li>
                    <li>
                        <img src={PrgressBar} alt="PrgressBar" className="image-bar"/>
                    </li>
                    <li>
                        <img src={Step3} alt="Step 3"/>
                        <div className="progress-steps">
                            <strong>STEP 3</strong>
                            <br/><br/>
                            EMPLOYMENT DETAILS
                        </div>
                    </li>
                    <li>
                        <img src={PrgressBar} alt="PrgressBar" className="image-bar"/>
                    </li>
                    <li>
                        <img src={Step4} alt="Step 4"/>
                        <div className="progress-steps">
                            <strong>STEP 4</strong>
                            <br/><br/>
                            UPLOAD DOCUMENTS
                        </div>
                    </li>
                    <li>
                        <img src={PrgressBar} alt="PrgressBar" className="image-bar"/>
                    </li>
                    <li>
                        <img src={Step5} alt="Step 5"/>
                        <div className="progress-steps">
                            <strong>STEP 5</strong>
                            <br/><br/>
                            COMPLETE
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default ProgressBar