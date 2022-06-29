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