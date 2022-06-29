import  React from 'react';
import { Fragment } from 'react';
import '../MainEntryComponents/Main.css'

class CanvasShapes extends React.Component {

    DrawShapes = () => {

        const canvasRef = React.createRef();

        const drawShapes = () => {
            let randomNumX = Math.floor(Math.random() * 1000)
            let randomNumY = Math.floor(Math.random() * 1000)
            let c = canvasRef.current
            if (c === null) return
            let ctx = c.getContext('2d')
            let ctx2 = c.getContext('2d')
            var path = new Path2D();
            var path2 = new Path2D();
            ctx.fillStyle = 'rgba(37, 37, 37, 0.6)';
            path.rect(randomNumX,randomNumY,randomNumY,randomNumX)
            ctx.fill(path);
            ctx2.fillStyle = 'rgba(37, 37, 37, 0.6)';
            path2.rect(randomNumX, randomNumY, randomNumY, randomNumX);
            ctx2.fill(path2);
            ctx2.rotate(((2 * Math.PI) / 6) * randomNumX + ((2 * Math.PI) / 6000) * randomNumY);
        };

        const deleteShapes = () => {
            let canvas = canvasRef.current
            if (canvas === null) return
            let ctx = canvas.getContext('2d')
            let path3 = new Path2D();
            path3.rect(canvas.width,canvas.height,canvas.width, canvas.height)
            ctx.fillStyle = 'rgb(189, 142, 216)';
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }

        setInterval(() => {
            drawShapes();
            setTimeout(() => {
                deleteShapes();
            }, 2000)
        }, 2000)




        return (
            <Fragment>
                <canvas id='main-canvas' className='main-Canvas' ref={canvasRef} height={'1000px'} width={'2000px'}>
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