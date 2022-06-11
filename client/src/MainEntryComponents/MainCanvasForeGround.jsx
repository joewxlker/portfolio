import React, { useEffect } from 'react'
import './Main.css'

const MainCanvasForeGround = () => {

        const canvasRef = React.createRef();

        const drawShapes = () => {
            let randomNumX = Math.floor(Math.random() * 100)
            let randomNumY = Math.floor(Math.random() * 100)
            let randomNumXPosition = Math.floor(Math.random() * 100)
            let randomNumYPosition = Math.floor(Math.random() * 1000)
            let c = canvasRef.current
            let ctx = c.getContext('2d')
            let ctx2 = c.getContext('2d')
            var path = new Path2D();
            var path2 = new Path2D();
            if(c === null) return
            ctx.fillStyle = 'rgb(300, 300, 300)';
            path.rect(randomNumXPosition,randomNumYPosition,randomNumY,randomNumX)
            ctx.fill(path);
            ctx2.fillStyle = 'rgb(300, 300, 300)';
            path2.rect(randomNumXPosition,randomNumYPosition,randomNumY,randomNumX);
            ctx2.fill(path2);
            ctx2.rotate(((2 * Math.PI) / 6) * randomNumX + ((2 * Math.PI) / 6000) * randomNumY);
        };

        const deleteShapes = () => {
            let c = canvasRef.current
            let ctx = c.getContext('2d')
            let path3 = new Path2D();
            path3.rect(c.width,c.height,c.width, c.height)
            ctx.fillStyle = 'rgb(189, 142, 216)';
            ctx.clearRect(0, 0, c.width, c.height);
        }

        useEffect(() => {
            setInterval(() => {
                drawShapes();
            }, 100)
        });
 
        useEffect(() => {
            setInterval(() => {
                deleteShapes();
            }, 500)
        });




    return (
        <>
            <div className='d-flex w-100 justify-content-between'>
                <canvas id='main-canvas' className='main-Canvas-ForeGround-right' ref={canvasRef} height={'300px'} width={'2000px'}>
                </canvas>
            </div>
        </>
    );
    }

export default MainCanvasForeGround;