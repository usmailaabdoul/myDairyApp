import theme from './../../style/theme';

const styles = {
    mainCard: {
        padding: 10,
        width: '49%',
        marginRight: 5,
        marginVertical: 2,
        borderRadius: 5,
        justifyContent: 'space-between',
        // shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.4 ,
        // shadowRadius: 9,
        elevation: 2,
        position: 'relative',
    },
    reminderTitle: {
        color: theme.WHITE_BACKGROUND_COLOR,
        fontSize: 16,
    },
    date: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
    },
    dateText: {
        color: theme.WHITE_BACKGROUND_COLOR,
        fontSize: 12
    },
    completedContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    completedContainerText: {
        marginRight: 3,
        fontSize: 12,
        color: theme.WHITE_BACKGROUND_COLOR
    }
}

export default styles;