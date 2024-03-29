import React from 'react';
import makeStyles from '@material-ui/styles/makeStyles';
import Iframe from 'react-iframe';

const useStyles = makeStyles(theme => ({
  iframe: {
    height: 400,
    width: '100%',
    border: '3px solid rgba(102, 102, 102, 0.3)',
  },
}));

// 현재 방송중 url
// https://player.twitch.tv/?channel=${creatorName}
// 지난 vod url : 한동숙 190722
// https://player.twitch.tv/?autoplay=false&video=v455886675
// 지난 vod 특정 시점
// https://player.twitch.tv/?autoplay=false&t=00h00m07s&video=v455886675"
export default function TwitchVod(props) {
  const {
    creatorName, videoId, time, ...rest
  } = props;

  console.log(videoId, time);

  let url;
  if (time) {
    url = creatorName
      ? `https://player.twitch.tv/?channel=${creatorName}`
      : `https://player.twitch.tv/?video=${videoId}&t=${time}`;
  } else {
    url = creatorName
      ? `https://player.twitch.tv/?channel=${creatorName}`
      : `https://player.twitch.tv/?video=${videoId}`;
  }

  const classes = useStyles();

  return (
    <Iframe
      url={url}
      className={classes.iframe}
      {...rest}
    />
  );
}
