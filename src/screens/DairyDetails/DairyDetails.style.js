import theme from './../../style/theme';

const styles = {
    mainContainer: {
        flex: 1,
        backgroundColor: theme.WHITE_BACKGROUND_COLOR,
        // paddingHorizontal: 15,
    },
    headerWrapper: {
        flexDirection: 'row',
        marginHorizontal: 15,
        // marginVertical: 15,
        paddingTop: 20,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    headerText: {
        fontSize: 20,
        color: theme.Text_PRIMARY_COLOR,
        fontWeight: '700',  
    },
    dairyCardDateText: {
        fontSize: 14,
        color: theme.Text_PRIMARY_COLOR,
    },
    image: {
        height: 300,
        width: '100%'
    },
    content: {
        marginHorizontal: 15,
    },
    contentText: {
        fontSize: 16,
        color: theme.Text_PRIMARY_COLOR
    },

    rootContainer: {
        marginLeft: 100,
        marginRight: 10,
        position: 'absolute',
        top: 10,
        left: 10,
        backgroundColor: 'white'
    }
}

export default styles;