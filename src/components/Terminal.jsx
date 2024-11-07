import React, { useState, useEffect, useRef } from 'react';
import TimeDisplay from './TimeDisplay'
import { useNavigate } from 'react-router-dom';

const Terminal = () => {

    const [inputValue, setInputValue] = useState('');
    const [history, setHistory] = useState([]);
    const [matchingCommands, setMatchingCommands] = useState([]);
    const [matchIndex, setMatchIndex] = useState(0);
    const inputRef = useRef(null);
    const terminalEndRef = useRef(null);
    const navigate = useNavigate();

    const commands = ['help', 'ls', 'about', 'whoAmI', 'cd .\\about\\', 'cd .\\experience\\', 'cd .\\projects\\', 'cd .\\contact\\', 'cd .\\assignments\\'];

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    const handleCommand = (command) => {
        switch (command) {
            case 'help':
                return 'Hi I am Rehan Samaratunga. You can use this terminal to navigate through my portfolio and learn more about me. Here are some available commands to get started:\nls\ncd\nabout';
            case 'ls':
                const commandsList = [
                    { cmd: 'about', desc: 'Who am I' },
                    { cmd: 'experience', desc: 'Job and work background' },
                    { cmd: 'projects', desc: 'Current and past projects' },
                    { cmd: 'contact', desc: 'Please reach out to me!' }
                ];
                return commandsList.map(item => `${item.cmd.padEnd(12)}----- ${item.desc}`).join('\n');
            case 'about':
                return 'I am, a computer science student at Boston University with a focus on AI and product development. As a full-stack software engineer I am proficient in Python, Java, JavaScript, Assembly, C, C#, SQL and Git. Developing natural language processing and generation models for machine learning development. Able to pick up new languages and concepts very easily. Is extremely competent at processing information on the web to deliver solutions efficiently, excellent problem-solving skills and ability to perform well in a team. An outgoing, social team player looking to make an impact on the world.';
            case 'cd .\\about\\':
                setTimeout(() => {
                    navigate('/about');
                }, 1000);
                return "Navigating to the About page...";
            case 'cd .\\experience\\':
                setTimeout(() => {
                    navigate('/work-experience');
                }, 1000);
                return "Navigating to the Expeirience page...";
            case 'cd .\\projects\\':
                setTimeout(() => {
                    navigate('/projects');
                }, 1000);
                return "Navigating to the Projects page...";
            case 'cd .\\contact\\':
                setTimeout(() => {
                    navigate('/contact');
                }, 1000);
                return "Navigating to the Contact page...";
            case 'cd .\\assignments\\':
                setTimeout(() => {
                    navigate('/assignments');
                }, 1000);
                return "Navigating to the Assignments for CAS CS 506 page...";
            default:
                return `'${command}' is not recognized as a valid command. Type 'help' for a list of commands.`;
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            const userInput = `C:\\Users\\rehan-samaratunga> ${inputValue}`;
            const commandOutput = handleCommand(inputValue.trim());
            const outputLines = commandOutput.split('\n');
            setHistory((prevHistory) => [...prevHistory, userInput, ...outputLines]);
            setInputValue('');
            setMatchingCommands([]);
            setMatchIndex(0);
        } else if (e.key === 'Tab') {
            e.preventDefault();
            handleAutoComplete();
        }
    };

    const handleAutoComplete = () => {
        if (!matchingCommands.length) {
            // Find all commands that match the current input
            const matches = commands.filter((cmd) =>
                cmd.startsWith(inputValue.trim())
            );
            setMatchingCommands(matches);
            setMatchIndex(0);

            // Set the input value to the first matching command if there's at least one match
            if (matches.length > 0) {
                setInputValue(matches[0]);
            }
        } else {
            // Cycle through the matching commands
            const nextIndex = (matchIndex + 1) % matchingCommands.length;
            setMatchIndex(nextIndex);
            setInputValue(matchingCommands[nextIndex]);
        }
    };

    const handleInputChange = (e) => {
        const newValue = e.target.value;
        setInputValue(newValue);

        // Reset matching commands and index if input changes
        if (newValue.length < inputValue.length) {
            // If the user deletes a character, reset the matches
            setMatchingCommands([]);
            setMatchIndex(0);
        } else {
            // If adding characters, we also reset to search for new matches
            setMatchingCommands([]);
            setMatchIndex(0);
        }
    };

    useEffect(() => {
        terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [history]);



    return (
        <div className='hero-terminal'>
            <div className="terminal-bar dark-mode">
                <div className="icon-btn close"></div>
                <div className="icon-btn min"></div>
                <div className="icon-btn max"></div>
                <div className="terminal-bar-text">
                    rehan-samaratunga
                </div>
            </div>
            <div className="terminal-body">
                <div className='terminal-text' id="scrollbar1">
                    <div className="full-width-line"></div>
                    <TimeDisplay />
                    <div className="full-width-line"></div>
                    Type 'help' to learn what commands to use <br />
                    {history.map((line, index) => (
                        <div key={index}>
                            {line}
                        </div>
                    ))}
                    <div className="input-line">
                        <span className="term-text">C:\Users\rehan-samaratunga&gt;</span>
                        <input
                            ref={inputRef}
                            type="text"
                            value={inputValue}
                            onKeyDown={handleKeyDown}
                            onChange={handleInputChange}
                            className="terminal-input"
                            autoFocus
                        />
                    </div>
                    <div ref={terminalEndRef}></div>
                </div>
            </div>
        </div>
    )
}

export default Terminal