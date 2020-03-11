import theme from './../../style/theme'

const styles = {
    dairyCard: {
        backgroundColor: theme.WHITE_BACKGROUND_COLOR,
        padding: 10,
        borderRadius: 5,
        // borderColor: theme.BORDER_RADIUS_COLOR,
        // borderWidth: 1,
        borderBottomWidth: 5, 
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        marginHorizontal: 15,
        marginVertical: 10,
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.5,
        elevation: 5,
        position: 'relative',
    },
    dairyCardDate: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    dairyCardDateText: {
        color: theme.Text_PRIMARY_COLOR,
        fontSize: 14,
    },
    dairyCardHeader: {
        color: '#000000',
        fontSize: 20,
    },
    dairyContent: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
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
        height: 80,
        width: 125,
        borderRadius: 5,
    },
    dairyContentText: {
        flexShrink: 1,
        fontSize: 15,
        color: theme.Text_PRIMARY_COLOR,

    },
    
}

export default styles;