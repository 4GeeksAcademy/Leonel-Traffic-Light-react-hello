import React, { useState } from 'react'
import { Button } from '@mui/material'
// import { makeStyles } from '@mui/styles';
import ButtonGroup from '@mui/material/ButtonGroup';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';




const TrafficLight = () => {
    const [red, setIsLightRed] = useState(false)
    const [yellow, setIsLightYellow] = useState(false)
    const [green, setIsLightGreen] = useState(false)
    const [purple, setIsLightPurple] = useState(false)

    const handleButtonRed = () => {
        setIsLightRed(true)
        setIsLightGreen(false)
        setIsLightYellow(false)
        setIsLightPurple(false)

    }

    const handleButtonYellow = () => {
        setIsLightYellow(true)
        setIsLightGreen(false)
        setIsLightRed(false)
        setIsLightPurple(false)
    }
    const handleButtonGreen = () => {
        setIsLightGreen(true)
        setIsLightYellow(false)
        setIsLightRed(false)
        setIsLightPurple(false)

    }

    return (
        <div className='container-sm' style={{
            height: '500px',
            // display: 'flex',
            // alignItems: 'center',
            // justifyContent: 'center',
            // backgroundColor: 'blue'
        }}>
            <div className='stickContainer' style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '190px',
                justifyContent: 'center'
            }}>
                <div className='stickTrafficLight' style={{
                    height: '60px', width: '10px', backgroundColor: 'black',
                    marginRight: '150px',
                    position: 'absolute',
                    top: '14%'

                }}></div>
            </div>

            <div className='boddyContainer' style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: '150px'

            }}>
                <div className='boddyTrafficLight' style={{
                    marginTop: '50px',
                    margin: 'auto',
                    backgroundColor: "black",
                    height: "135px",
                    width: "50px",
                    borderRadius: '5px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <div class="btn-group-vertical" role="group" aria-label="Vertical button group" style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <button type="button" class="btn btn-red" onClick={handleButtonRed}
                            style={{
                                alignItems: 'center',
                                margin: '1px',
                                borderRadius: "50%",
                                width: "40px",
                                height: "40px",
                                backgroundColor: 'red',
                                boxShadow: red ? '1px 1px 1px 7px #D1D5AE' : ''
                            }}
                        ></button>
                        <button type="button" class="btn btn-warning" onClick={handleButtonYellow}
                            style={{
                                // displa: 'flex',
                                // justifyContent: 'center',
                                // alignItems: 'center',
                                alignItems: 'center',
                                margin: '1px',
                                borderRadius: "50%",
                                width: "40px",
                                height: "40px",
                                backgroundColor: 'yellow',
                                boxShadow: yellow ? '1px 1px 1px 7px #D1D5AE' : ''
                            }}></button>
                        <button type="button" class="btn btn-success" onClick={handleButtonGreen} style={{
                            alignItems: 'center',
                            margin: '1px',
                            borderRadius: "50%",
                            width: "40px",
                            height: "40px",
                            backgroundColor: 'green',
                            boxShadow: green ? '1px 1px 1px 7px #D1D5AE' : ''
                        }}></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TrafficLight
