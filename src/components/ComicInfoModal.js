import React from 'react';
import { Link } from 'react-router-dom';
import {
    ModalWrapper, ModalImage, ModalTitle, ModalHeader,
    ModalDescriptionWrapper, ModalDescription, ModalCharacterWrapper,
    OutLinedButton
}
from './DetailsInfoStyledComponent';


const stripId = (url) => {
    const regex = /(\d{3,})/g;
    const id = url.match(regex);
    return id[0];
};


const ComicInfoModal = ({ modal, handleReadMore, comicInfo }) => {
    return (
        <div>
            <ModalWrapper anchor="right" open={modal} onClose={handleReadMore}>
                <div
                    tabIndex={0}
                    role="button"
                    onClick={handleReadMore}
                    onKeyDown={handleReadMore}
                >
                    <ModalHeader>
                        <ModalImage
                            src={`${comicInfo.thumbnail.path}/portrait_medium.${comicInfo.thumbnail.extension.replace(/http/g, 'https')}`}
                            alt={comicInfo.title}
                        />
                        <ModalTitle>{comicInfo.title}</ModalTitle>
                    </ModalHeader>

                    <ModalDescriptionWrapper>
                        <ModalDescription>
                            {
                                comicInfo.description
                                    ?
                                    comicInfo.description
                                    :
                                    'No description available at this moment.'
                            }
                        </ModalDescription>
                    </ModalDescriptionWrapper>

                    <ModalDescriptionWrapper>
                        <ModalTitle other >Specification</ModalTitle>
                        <ModalDescription other>
                            {
                                comicInfo.issueNumber == 0
                                    ?
                                    `Issue: Unknown`
                                    :
                                    `Issue: ${comicInfo.issueNumber}`
                            }
                        </ModalDescription>

                        <ModalDescription other>
                            {
                                comicInfo.pageCount == 0
                                    ?
                                    `Number of Pages: Unknown`
                                    :
                                    `Number of Pages: ${comicInfo.pageCount}`
                            }
                        </ModalDescription>
                    </ModalDescriptionWrapper>

                    <ModalDescriptionWrapper>
                        <ModalTitle other >Characters</ModalTitle>
                        {
                            comicInfo.characters.items.length > 0
                                ?
                                comicInfo.characters.items.map((item, i) => {
                                    return (
                                        <ModalCharacterWrapper key={i}>
                                            <ModalDescription other>{item.name}</ModalDescription>
                                            <Link to={`/hero/${stripId(item.resourceURI)}`}>
                                                <OutLinedButton variant="outlined">
                                                    View
                                                </OutLinedButton>
                                            </Link>
                                        </ModalCharacterWrapper>
                                    )
                                })
                                :
                                'No characters available at this moment'
                        }
                    </ModalDescriptionWrapper>

                </div>
            </ModalWrapper>
        </div>
    );
};

export default ComicInfoModal;