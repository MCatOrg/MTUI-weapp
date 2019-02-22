const Toast = ({title = 'title', type = 'success', duration = 1000}) => {

    let image;
    switch (type) {
        case 'success':
            image = '/static/images/icon/success.png';
            break;
        case 'error':
            image = '/static/images/icon/error.png';
            break;
        case 'info':
            image = '/static/images/icon/info.png';
            break;
        case 'wait':
            image = '/static/images/icon/wait.png';
            break;
        case 'warning':
            image = '/static/images/icon/warning.png';
            break;
        default:
            console.error('传入toast的type值有误喔')
            image = '/static/images/icon/success.png';
            break;
    }

    wx.showToast({
        title: title,
        image: image,
        duration: duration,
    })
}

const SuccessToast = (title, duration) => {
    Toast({
        title: title,
        duration: duration,
    })
}

const ErrorToast = (title, duration) => {
    Toast({
        title: title,
        type: 'error',
        duration: duration,
    })
}

const WarningToast = (title, duration) => {
    Toast({
        title: title,
        type: 'warning',
        duration: duration,
    })
}

const InfoToast = (title, duration) => {
    Toast({
        title: title,
        type: 'info',
        duration: duration,
    })
}

const WaitToast = (title, duration) => {
    Toast({
        title: title,
        type: 'wait',
        duration: duration,
    })
}

export default {
    Toast,
    SuccessToast,
    ErrorToast,
    WarningToast,
    InfoToast,
    WaitToast
}