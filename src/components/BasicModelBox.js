import React from 'react';


class BasicModelBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="ModelBox-Model">
        <style
          dangerouslySetInnerHTML={{
            __html: `
              .ModelBox-Model{
                width:100%;
                height:100%;
              }
            .ModelBox-Model-wrapper{
              position:fixed;
              top:0;
              left:0;
              right:0;
              bottom:0;
              overflow:scroll;
              z-index:999999;
              background-color:rgba(150,150,150,.5);
            }
              .ModelBox-Model-close{
                position:absolute;
                top:0px;
                padding:10px;
                right:0px;
              }
              .ModelBox-Model-close:after{
                  content:'X';
                  display:block;
                  font-weight:900;
                }
              .ModelBox-Model-content{
                background:white;
                padding:20px;
                margin:40px auto;
                position:absoloute;
                width:75%;
              }
              `
          }}
        />
        <div className="ModelBox-Model-wrapper">
          <div onClick={this.props.onClose} className="ModelBox-Model-close" />
          <div className="ModelBox-Model-content">{this.props.children}</div>
        </div>
      </div>
    );
  }
}

export default BasicModelBox;
