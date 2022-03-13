'''
Class to create a list of categories from the nace labels information
retreive from the dataset.
'''

def aggregate_labels(data_set):
    '''Get all information from each labels in the collection'''
    labels_list = []
    for data in data_set:
        labels_list.append(data["nace_1_label"].lower() + " " + data["nace_2_label"].lower() + " " + data["nace_3_label"].lower())
    return labels_list

def clean_labels_list(labels_list):
    ''' sort the labels list and return a list of unique label '''
    # convert a list of sentences into a list of words
    new_list = []
    for item in labels_list:
        new_list += item.split()

    # remove grammatical conjunction
    for item in new_list:
        if item == '&' or item == 'and' or item == 'related' \
            or item == 'activities' or item == 'other':
            new_list.remove(item)

    # remove duplicates
    new_list = list(dict.fromkeys(new_list))
    return new_list
