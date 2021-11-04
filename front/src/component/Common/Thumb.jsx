import React from 'react';

class Thumb extends React.Component {
  state = {
    loading: false,
    thumb: undefined,
  };

  componentWillReceiveProps(nextProps) {
    if (!nextProps.file) {
      return;
    }

    this.setState({ loading: true }, () => {
      let reader = new FileReader();

      reader.onloadend = () => {
        this.setState({ loading: false, thumb: reader.result });
      };
      if (nextProps.file?.type?.match('image.*')) {
        reader.readAsDataURL(nextProps.file);
      }
    });
  }

  render() {
    const { file, src } = this.props;
    const { loading, thumb } = this.state;
    if (!file) {
      return null;
    }

    if (loading) {
      return <p>loading...</p>;
    }

    return (
      <img
        src={thumb ? thumb : src}
        alt={file.name}
        className="img-thumbnail mt-2"
        height={200}
        width={200}
      />
    );
  }
}

export default Thumb;
