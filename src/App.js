import React from "react";
import Die from './components/Die';

export default function App() {
    return (
        <main className="main"> 
            <div className="outer-box">
                <div className="inner-box">
                    <div className="dice">
                        <Die value={1} />
                        <Die value={2} />
                        <Die value={3} />
                        <Die value={4} />
                        <Die value={5} />
                        <Die value={6} />
                        <Die value={1} />
                        <Die value={2} />
                        <Die value={3} />
                        <Die value={4} />
                    </div>
                </div>
            </div>
        </main>
    )
}