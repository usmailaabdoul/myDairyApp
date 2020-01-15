import theme from '../../style/theme';

const styles = {
    rootContainer: {
        maxHeight: '95%',
        backgroundColor: 'white'
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: theme.BORDER_RADIUS_COLOR + 90
    },
    headerText: {
        fontSize: 20,
        color: theme.Text_PRIMARY_COLOR,
        fontWeight: '700'
    },
    inputContainer: {
        marginHorizontal: 15,
        marginTop: 10,
    },
    input: {
        height: 70,
        width: '100%',
        fontSize: 14,
        fontStyle: 'normal',
        color: '#383a45',
    },
    inputWrapper: {
        marginVertical: 5,
        borderRadius: 5,
        // backgroundColor: '#fcfbfb',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: theme.BORDER_RADIUS_COLOR
    },
    colorWrapper: {
        marginHorizontal: 10,
        marginVertical: 20
    },
    color: {
        paddingHorizontal: 30,
        paddingVertical: 30,
        // width: 25,
        marginHorizontal: 5,
        borderRadius: theme.PROFILE_IMAGE_BORDER_RADIUS
    }
} 

export default styles;