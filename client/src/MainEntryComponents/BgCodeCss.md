    .main-Canvas{
        width: 100%;
        height: 80%;
        position:absolute;
        position: top;
        z-index: 0;
        transform:translate(-44px,-0px);
        animation: translateCanvas 10s linear infinite;
        -o-animation: translateCanvas 10s linear infinite;
    }


    @keyframes translateCanvas {
        from{
            transform:translate(-0px,850px);
        }
        to{
            transform:translate(-0px,-650px);
        }
    }