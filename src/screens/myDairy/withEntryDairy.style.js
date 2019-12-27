import theme from './../../style/theme'
const styles2 = {
    mainContainer: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: theme.LIGHT_BACKGROUND_COLOR
    },
    actionButtonIcon: {
        color: theme.WHITE_BACKGROUND_COLOR,
        fontSize: 25
    },

    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 20,
        marginVertical: 15
    },
    headerText: {
        color: theme.Text_PRIMARY_COLOR,
        fontSize: 16,
        fontWeight: 'bold'
    },
    welcomeCard: {
        backgroundColor: theme.PRIMARY_COLOR,
        marginHorizontal: 20,
        padding: 10,
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.9,
        elevation: 5,
        position: 'relative',
    },
    welcomeTextWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
        // marginHorizontal: 
    },
    welcomeTextheading: {
        fontSize: 25,
        color: theme.WHITE_BACKGROUND_COLOR
    },
    welcomeText: {
        fontSize: 18,
        color: theme.WHITE_BACKGROUND_COLOR
    },
    dairyCard: {
        backgroundColor: theme.WHITE_BACKGROUND_COLOR,
        padding: 10,
        borderRadius: 5,
        borderColor: theme.BORDER_RADIUS_COLOR,
        borderWidth: 1,
        borderBottomWidth: 10, 
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        marginHorizontal: 20,
        marginVertical: 10
    },
    dairyCardDate: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    dairyCardDateText: {
        color: theme.Text_PRIMARY_COLOR,
        fontSize: 16
    },
    dairyCardHeader: {
        color: theme.Text_PRIMARY_COLOR,
        fontSize: 20,
    },
    dairyContent: {
        marginVertical: 10,
        flexDirection: 'row'
    },
    imageWrapper: {
        marginRight: 10,
        // borderWidth: 1,
        borderColor: '#cccccc',
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.5,
        elevation: 9,
        position: 'relative',
    },
    image: {
        height: 90,
        width: 120,
        borderRadius: 5,
    },
    dairyContentText: {
        flexShrink: 1,
        fontSize: 16,
        color: theme.Text_PRIMARY_COLOR,

    },
    search: {
        height: 40,
        width: '80%',
        fontSize: 16,
        fontStyle: 'normal',
        color: '#383a45',
    },
    searchWrapper: {
        marginVertical: 5,
        backgroundColor: '#fcfbfb',
        flex: 2,
        borderRadius: 5,
        borderColor: theme.BORDER_RADIUS_COLOR,
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
}

export default styles2;