'use client'
import { useState } from 'react';
import Head from 'next/head';

export default function Calculator() {
    const keyboard: string[][] = [['7', '8', '9', '/'], ['4', '5', '6', '*'], ['1', '2', '3', '-'], ['0', '.', '=', '+']];
    const [display, setDisplay] = useState('');

    const handleInput = (val: string) => {
        if (val === '=') {
            calculate();
        } else {
            setDisplay(prev => prev + val);
        }

    };

    const calculate = () => {
        try {

            setDisplay(eval(display).toString());
        } catch (error) {
            setDisplay('Error');
        }
    };

    const clearDisplay = () => {
        setDisplay('');
    };

    return (
        <div className="calculator-container">
            <Head>
                <title>Daisy's Calculator</title>
                <style>{`
          .calculator-container {
            max-width: 300px;
            margin: 0 auto;
            padding: 20px;
            font-family: Arial, sans-serif;
          }
          .calculator-title {
            text-align: center;
            margin-bottom: 15px;
            font-size: 1.5rem;
          }
          table {
            width: 100%;
            border-collapse: collapse;
          }
          input[type="text"] {
          border:1px;
            width: 100%;
            padding: 10px;
            margin-bottom: 10px;
            text-align: right;
            font-size: 1.2rem;
          }
          input[type="button"] {
            width: 100%;
            padding: 15px;
            font-size: 1rem;
            border: 1px solid #ddd;
            background-color: #f5f5f5;
            cursor: pointer;
          }
          input[type="button"]:hover {
            background-color: #e9e9e9;
          }
        `}</style>
            </Head>

            <div className="calculator-title">Daisy's Calculator</div>
            <table>
                <tbody>
                    <tr>
                        <th colSpan={3}>
                            <input
                                type="text"
                                value={display}
                                readOnly
                            />
                        </th>
                        <th>
                            <input
                                type="button"
                                value="C"
                                onClick={clearDisplay}
                            />
                        </th>
                    </tr>

                    {keyboard.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {row.map((i, index) => (
                                <button className='border p-2 m-2' type="button" value={i} onClick={() => handleInput(i)} >{i}
                                </button>
                            ))}
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    );
}