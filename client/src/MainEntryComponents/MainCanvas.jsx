import  React from 'react';
import { Fragment, useEffect } from 'react';
import polygon from '../Images/PolygonBlack.svg'
import './Main.css'

class CanvasShapes extends React.Component {

    
    constructor(props) {
        super(props);
    }

    DrawShapes = () => {

        const canvasRef = React.createRef();
        const imgRef = React.createRef();

        const drawShapes = async () => {
            let randomNumX = Math.floor(Math.random() * 1000)
            let randomNumY = Math.floor(Math.random() * 1000)
            let c = canvasRef.current
            let ctx = c.getContext('2d')
            var path = new Path2D();
            ctx.fillStyle = 'white';
            path.rect(randomNumX,randomNumY,randomNumY,randomNumX)
            ctx.fill(path);

            
        };

        const drawShapes2 = async () => {
            let randomNumX = Math.floor(Math.random() * 1000)
            let randomNumY = Math.floor(Math.random() * 1000)
            let c = canvasRef.current
            let ctx = c.getContext('2d')
            var path2 = new Path2D();
            ctx.fillStyle = 'rgb(189, 142, 216)';
            path2.rect(randomNumX, randomNumY, randomNumY, randomNumX);
            ctx.fill(path2);
            ctx.rotate(((2 * Math.PI) / 6) * randomNumX + ((2 * Math.PI) / 6000) * randomNumY);
        }

        const deleteShapes = () => {
            let time = new Date();
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
            }, 1000)
        });

        useEffect(() => {
            setInterval(() => {
                drawShapes2();
            }, 1000)
        });

        useEffect(() => {
            setInterval(() => {
                deleteShapes();
            }, 2000)
        });




        return (
            <Fragment>
                <canvas id='main-canvas' className='main-Canvas' ref={canvasRef} height={'800px'} width={'2000px'} b>
                    <svg className='main-canvasSvg' src={polygon} alt='polygon' ref={imgRef} /> 
                </canvas>
            </Fragment>
        );
    }

    render() {
        return (
            <Fragment>
                <this.DrawShapes/>
            </Fragment>
        );
    }
}

export default CanvasShapes