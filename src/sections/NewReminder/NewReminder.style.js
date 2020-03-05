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
        borderWidth: 1,
        borderRadius: 5,
        borderColor: theme.BORDER_RADIUS_COLOR
    },
    colorsHeader: {
        fontSize: 16,
        color: '#383a45',
        marginHorizontal: 15,
        marginVertical: 10
    },
    colorWrapper: {
        paddingLeft: 10,
        marginBottom: 20
    },
    selected: {
        paddingHorizontal: 8,
        justifyContent: 'center',
        marginHorizontal: 5,
        borderRadius: theme.PROFILE_IMAGE_BORDER_RADIUS
    },
    unSelected: {
        paddingHorizontal: 30,
        paddingVertical: 30,
        marginHorizontal: 5,
        borderRadius: theme.PROFILE_IMAGE_BORDER_RADIUS
    },
    finishButton: {
        backgroundColor: theme.PRIMARY_COLOR,
        padding: 10,
        paddingVertical: 15,
        marginVertical: 5,
        marginHorizontal: 15,
        alignItems: 'center',
        borderRadius: 5
     },
     finishButtonText: {
         fontSize: theme.FONT_SIZE_LARGE,
         color: theme.WHITE_BACKGROUND_COLOR,
         fontWeight: theme.FONT_WEIGHT_HEAVY,
    },
} 

export default styles;