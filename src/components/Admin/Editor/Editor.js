import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import EditImageSlider from '../EditImageSlider/EditImageSlider';
import EditAbout from '../EditAbout/EditAbout';
import Sidebar from '../Sidebar/Sidebar';
import {
  getAbout,
  getImages,
  addImage,
  updateAbout
} from '../../../ducks/reducer';
import './Editor.css';

class Editor extends Component {
  state = {
    images: [],
    err: '',
    show: ''
  };

  componentDidMount = () => {
    this.props.getImages();
    this.props.getAbout();
  };

  showComponent = page => {
    this.setState({
      show: page
    });
  };

  saveImage = image => {
    this.props.addImage(image);
  };
  render() {
    console.log(this.props.user);
    let view = (
      <div>
        <button
          className="view__button"
          value="image"
          onClick={e => this.showComponent(e.target.value)}
        >
          Image Slider
        </button>
        <button
          className="view__button"
          value="about"
          onClick={e => this.showComponent(e.target.value)}
        >
          About Section
        </button>
      </div>
    );

    if (this.state.show == 'image') {
      view = (
        <section className="editor__section">
          <h2>Edit Slider</h2>
          <div className="editor_section_div">
            <EditImageSlider
              save={this.saveImage}
              aImages={this.props.allImages}
            />
          </div>
        </section>
      );
    }

    if (this.state.show == 'about') {
      view = (
        <section className="editor__section">
          <h2>Edit About</h2>
          <div className="editor_section_div">
            <EditAbout
              updateAbout={this.props.updateAbout}
              currAbout={this.props.about}
            />
          </div>
        </section>
      );
    }

    return (
      <div className="editor">
        {this.state.show === 'image' || this.state.show === 'about' ? (
          <Sidebar switchView={this.showComponent} />
        ) : (
          ''
        )}
        <div className="editor__switch">
          <h1 className="editor__switch__h1">What would you like to change?</h1>
          {view}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(
  mapStateToProps,
  { getAbout, getImages, addImage, updateAbout }
)(Editor);
